// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
  insert:'INSERT INTO user(username, password,create_time) VALUES(?,?,?)',
  update:'update user set name=?, age=? where id=?',
  delete: 'delete from user where id=?',
  queryById: 'select * from user where id=?',
  queryAll: 'select * from user',
  queryByUsername: 'select * from user where username=?',
  queryLogin: 'select * from user where username=? and password=?',
  insertdata:'INSERT INTO databiao(username,cosumername,cosumerdata,creattime) VALUES(?,?,?,?)',
  loaddata:'select * from databiao where username=?',
  updatedata:'update databiao set cosumerdata=?,creattime=? where cosumername=?',
  searchsame:'select * from databiao where cosumername=?'
};

module.exports = user;