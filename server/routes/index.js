var express = require('express');
var router = express.Router();
var Controllers = require('../controllers');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/labour',function(req,res,next){
  Controller.labour.getLabour({},function(err,labour){
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

router.get('/children',function(req,res,next){
  Controller.labour.getChildren(function(err,labour){
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

router.get('/labour',function(req,res,next){
  Controller.labour.getLabour({},function(err,labour){
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
  Controller.labour.getLabour({id_number:req.params.code},function(err,labour){
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

router.post('/labour',function(req, res, next){
  Controller.labour.createLabour(req.body,function(err,labour){
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
