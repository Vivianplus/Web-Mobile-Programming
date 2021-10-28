var express = require('express');
var router = express.Router();

var loki = require('lokijs');
//将提交的数据存储在 file 中data.json
var db = new loki('data.json', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

// implement the autoloadback referenced in loki constructor
function databaseInitialize() {
  var bookings = db.getCollection("bookings");
  if (bookings === null) {
    bookings = db.addCollection("bookings");
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Handle the Form */
router.post('/form', function (req, res) {

  var response = {
    header: req.headers,
    body: req.body
  };
  //在我们向客户端发送响应之前将数据存储在服务器端
  req.body.numTickets = parseInt(req.body.numTickets);
  db.getCollection("bookings").insert(req.body);
  res.json(response);
});

/* Display all Bookings */
//开发一个新的路由处理程序来显示我们数据库中的所有数据记录
router.get('/bookings', function (req, res) {

  var result = db.getCollection("bookings").find();

  res.render('bookings', { bookings: result });
});

module.exports = router;
