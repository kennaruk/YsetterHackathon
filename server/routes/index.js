var express = require('express');
var router = express.Router();
var Controller = require('../controllers');

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

module.exports = router;
