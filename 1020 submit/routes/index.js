var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/data",function(request,response){
  response.send(`你好`);
});

//router.get("/my",function(request,response){
//  response.send(`
//  <html>
//    <title>my html</title>
//    <style>
//
//    </style>
//    <body>
//      <form>
//        x:<input type="text"><br>
//        y:<input type="text"><br>
//        width:<input type="text"><br>
//        height:<input type="text"><br>
//        color:<input type="text"><br>
//        <button>提交</button>
//      </form>
//    </body>
//  </html>`);
//});

router.get("/result", function (req, res) {
  res.send(`<html>
  <style>
    div{
    width:`+ req.query.width+`;
    height: `+req.query.height+`;
    position: relative;
    top: `+req.query.y+`;
    left:`+ req.query.x+`;
    background-color:`+ req.query.color+`;
    }
  </style>
  <body>
    <div></div>
  </body>
  </html>`);
});

module.exports = router;
