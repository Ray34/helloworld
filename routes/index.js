var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'chat room' });
  });

router.post('/conf/create', function(req, res){
	console.log(req['body']);
	console.log(req['body'].name);
	res.send("创建成功");
});

router.get('/conf/close', function(req, res){
	console.log(req.query.confId);
	res.send("会议结束");
});

module.exports = router;
