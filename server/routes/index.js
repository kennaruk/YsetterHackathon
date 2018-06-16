var express = require('express');
var router = express.Router();
var Controllers = require('../controllers');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', (req, res, next) => {
  Controllers.user.getUserByUsername('kennaruk', (err, user) => {
    if(err)
      console.log(err);
    else
      console.log(user);
  });
});

router.post('/user', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password
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
        user: user
      });
  });
});

router.post('/login', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  Controllers.user.loginByUsernamePassword(user, (err, success) => {
    if(err)
      res.json({
        success: false,
        err: err
      });
    else
      res.json({
        success: success,
      });
  });
});

module.exports = router;
