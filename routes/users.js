var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//增加用户
router.post('/register', function(req, res, next) {
  userDao.add(req, res, next);
});
//用户登录
router.post('/login', function(req, res, next) {
  userDao.login(req, res, next);
});
//保存数据
router.post('/save', function(req, res, next) {
  userDao.save(req, res, next);
});
//加载数据
router.post('/loaditem', function(req, res, next) {
  userDao.loaditem(req, res, next);
});
module.exports = router;
