var express = require('express');
var router = express.Router();
var Controllers = require('../controllers');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/listLabour',function(req,res,next){
  Controllers.labour.getLabour({},function(err,labour){
    if(err){
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      var result = {};
      result.name = labour.first_name+" "+labour.last_name;
      result.id = labour.id_number;
      result.follower = labour.follower.length();
      res.status(200).json({
        success:true,
        data: result
      })
    }
  })
});

router.get('/children',function(req,res,next){
  Controllers.labour.getChildren(function(err,labour){
    if(err){
      console.log(err);
      
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      res.status(200).json({
        success:true,
        data:labour
      })
    }
  })
});

router.get('/children/:code',function(req,res,next){
  Controllers.labour.getChildrenById({id_number:req.params.code},function(err,labour){
    if(err){
      console.log(err);
      
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      var result = labour.map(a => a.follower);
      res.status(200).json({
        success:true,
        data:result[0]
      })
    }
  })
});

router.get('/labour',function(req,res,next){
  Controllers.labour.getLabour({},function(err,labour){
    if(err){
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      res.status(200).json({
        success:true,
        data:labour
      })
    }
  })
});

router.get('/labour/:code',function(req,res,next){
  Controllers.labour.getLabour({id_number:req.params.code},function(err,labour){
    if(err){
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      res.status(200).json({
        success:true,
        data:labour[0]
      })
    }
  })
});

router.get('/info/:code',function(req,res,next){
  Controllers.labour.getLabour({id_number:req.params.code},function(err,labour){
    if(err){
      res.status(500).json({
        success:false,
        err: err
      })
    }
    else{
      result={};
      follower=labour[0].follower[0];
      result.first_name = follower.first_name;
      result.last_name = follower.last_name;
      result.id_number = follower.id_number;
      result.gender = follower.gender;
      result.birth_date = follower.birth_date;
      result.nationality = follower.nationality;
      if(follower.education.thai||follower.education.not_thai||follower.education.other||follower.education.other_string||follower.education.sansiri||follower.education.not_sansiri)
      result.wasInSchool="เคย"
      else
      result.wasInSchool="ไม่เคย"
      result.grade = follower.education_current
      result.vaccine = "เคย"
      result.age = parseInt(parseInt((new Date()).getFullYear()-follower.birth_date.split('/')[2])+543)
      console.log(result.age);
      res.status(200).json({
        success:true,
        data:result
      })
    }
  })
});

router.post('/labour',function(req, res, next){
  Controllers.labour.createLabour(req.body,function(err,labour){
    if(err)
      res.status(500).json({
        success:false,
        err: err
      })
    else{
      res.status(200).json({
        success:true,
        data:labour
      })
    }
  })
});

/* user login register zone */
router.get('/user', (req, res, next) => {
  Controllers.user.getUserByUsername('kennaruk', (err, user) => {
    if(err)
      console.log(err);
    else
      console.log(user);
  });
});

router.post('/user', (req, res, next) => {
  console.log('req.body:', req.body)
  let user = {
    th_first_name:  req.body.th_first_name,
    th_last_name:    req.body.th_last_name,
    en_first_name:  req.body.en_first_name,
    en_last_name:   req.body.en_last_name,
    username:       req.body.username,
    password:       req.body.password
  };

  Controllers.user.addUserByUsernamePassword(user, (err, user) => {
    if(err)
      res.json({
        success: false,
        message: err
      });
    else
      res.json({
        success: true,
        data: user
      });
  });
});

router.post('/login', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  Controllers.user.loginByUsernamePassword(user, (err, user) => {
    if(err)
      res.json({
        success: false,
        err: err
      });
    else
      res.json({
        success: true,
        data: user
      });
  });
});

/* project zone */
router.get('/project', (req, res, next) => {
  Controllers.project.getAllProject((project) => {
    if(!project) 
      res.json({
        success: false
      });
    else
      res.json({
        success: true,
        data: project
      });
  });
});

router.post('/project', (req, res, next) => {
  let project = {
    code: req.body.code,
    th_name: req.body.th_name,
    en_name: req.body.en_name,
    province: req.body.province,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    contact: req.body.contact
  }

  Controllers.project.addProject(project, (err, project) => {
    if(err)
      res.json({
        success: false,
        err: err
      });
    else
      res.json({
        success: true,
        data: project
      })
  });
});
module.exports = router;
