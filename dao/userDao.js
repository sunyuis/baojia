// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('util');
var $sql = require('./userSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util._extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '服务器错误'
    });
  } else {
    res.json(ret);
  }
  console.log('返回数据成功');
};

module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.body||req.query || req.params;
      console.log(req.body);

      // 建立连接，向表中插入值
      // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
      if(!connection){
        jsonWrite(res);
        return;
      }

      connection.query($sql.insert, [param.username, param.userpassowrd,param.creattime], function(err, result) {
        if(result) {
          result = {
            code: 200,
            msg:'注册成功'
          };
          console.log('用户注册成功，数据已存入');
        }
        if(err){
          if(err.sqlState==23000){
            result = {
              code: 1,
              msg:'用户名已注册,请重新输入'
            };
            console.log('用户名已注册或数据库错误');
            console.log('code: '+err.code);
            console.log('errno: '+err.errno);
            console.log('sqlState: '+err.sqlState);
            console.log('index: '+err.index);
          }
        }
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接
        connection.release();
      });

    });
  },
  //登录
  login: function (req, res, next) {
    pool.getConnection(function(err, connection){
      // 获取前台页面传过来的参数
      var param = req.body||req.query || req.params;
      console.log(req.body);

      if(!connection){
        jsonWrite(res);
        return;
      }
      connection.query($sql.queryLogin,[param.username, param.userpassowrd],function(err,result){
        if(result.length == 1){
          result = {
            code: 200,
            msg:'登录成功'
          };
          console.log('用户登录成功');
        }
        if(result.length == 0){
          result = {
            code: 1,
            msg:'用户名或密码错误,请重新输入'
          };
          console.log('用户登录失败，无匹配用户信息');
        }
        if(err){
          if(true){
            result = {
              code: 1,
              msg:'用户名或密码错误,请重新输入'
            };
            console.log('数据库查询错误');
            console.log('code: '+err.code);
            console.log('errno: '+err.errno);
            console.log('sqlState: '+err.sqlState);
            console.log('index: '+err.index);
          }
        }
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res,result);
          // 释放连接
        connection.release();
      });

    });
  },
  //保存数据
  save: function (req, res, next) {
    pool.getConnection(function(err, connection){
      // 获取前台页面传过来的参数
      var param = req.body||req.query || req.params;
      console.log('保存客户名：'+param.cusumername);

      if(!connection){
        jsonWrite(res);
        return;
      }
      connection.query($sql.searchsame,[param.cusumername],function(err,result){
        console.log('数据库查询结果：'+result.length+'条该客户数据');
        if(result.length == 0){
            console.log('无该客户历史数据');
            connection.query($sql.insertdata,[param.username,param.cusumername,param.datay,param.datatim],function(err,result){
            if(result){
              result = {
                code: 200,
                msg:'保存成功'
              };
              console.log('数据新增保存成功');
            }
            if(err){
              if(true){
                result = {
                  code: 1,
                  msg:'插入错误'
                };
                console.log('code: '+err.code);
                console.log('errno: '+err.errno);
                console.log('sqlState: '+err.sqlState);
                console.log('index: '+err.index);
              }
            }
          });
        }
        if(result.length != 0){
          console.log('该客户存在历史数据，更新数据');
          connection.query($sql.updatedata,[param.datay,param.datatim,param.cusumername],function(err,result){
            if(result){
              result = {
                code: 200,
                msg:'保存成功'
              };
              console.log('数据更新保存成功');
            }
            if(err){
              if(true){
                result = {
                  code: 1,
                  msg:'更新错误'
                };
                console.log('code: '+err.code);
                console.log('errno: '+err.errno);
                console.log('sqlState: '+err.sqlState);
                console.log('index: '+err.index);
              }
            }
          })
        }
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res,result);
          // 释放连接
        connection.release();

      });

    });
  },
  //加载数据
  loaditem: function (req, res, next) {
    pool.getConnection(function(err, connection){
      // 获取前台页面传过来的参数
      var param = req.body||req.query || req.params;
      console.log('用户：'+param.username+'请求其保存的');
      if(!connection){
        jsonWrite(res);
        return;
      }
      connection.query($sql.loaddata,[param.username],function(err,result){
        console.log('数据库有'+result.length+'条记录');
        if(result.length != 0){
          result = {
            code: 200,
            msg:result
          };
        }
        if(result.length == 0){
          result = {
            code: 200,
            msg:'无记录'
          };
        }
        if(err){
          if(true){
            result = {
              code: 1,
              msg:'数据库错误啊'
            };
            console.log('code: '+err.code);
            console.log('errno: '+err.errno);
            console.log('sqlState: '+err.sqlState);
            console.log('index: '+err.index);
          }
        }
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res,result);
          // 释放连接
        connection.release();
      });

    });
  }
};

