const express = require('express');

// const mongoose = require('mongoose');
const studentRouter = require('./StudentAuth');
// const url = 'mongodb://localhost/Studentdbex'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const quiz = require('../public/js/cnquiz');
// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection
// con.on('open', function () { console.log("mogoDB connection established with quiz") })
const Quiz = require('../public/model/QuizDb')//DB Schema
const performance = require('../public/model/studentResultsDB')



var bodyParser = require('body-parser')
const router = express.Router()
const path = require('path');
const session = require('express-session');


var urlencodedParser = bodyParser.urlencoded({ extended: true });


const checkUser = (req, res, next) => {
  if (req.session.usn == undefined) {
    res.redirect('/StudentAuthentication/Authentication')
  } else { next() }
}

const QuizSubmitorNot=(req,res,next)=>{
  // console.log(req.session.quiz);
  // next();
  // var id=req.session.usn;
  MongoClient.connect(url,async(err,db)=>{
    if(err) throw err;
    var dbper =db.db("Studentdbex");
dbper.collection("performances").findOne({},async(err,result)=>{
  if(err) throw err;
  else {
    // var id =result.id;
    // console.log(result);
  if(result==null||result._id==undefined){
    next();
  }else{
    // res.send("<h>already Taken the</h>");
  //  window.alert("You have already taken the test");
  res.send(`<html>
  <head>
  <script>
window.alert("You have already taken this test");
  </script>
  </head>
  <body>
  <a href="/cn" style="text-align: center;">back</a>
  </body>
  </html>`)
  }
}
});
    });
}

//get the quiz questions from the db and print in osi.ejs
router.get("/osi",QuizSubmitorNot, checkUser, (req, res) => {
  // new quiz();
  let q = new quiz();

  q.fun(res);

});

router.post("/osi", urlencodedParser,  (req, res) => {

  console.log(req.session.usn);
  var count = 0;

  //this well fetch the test results of the quiz
  var answers = req.body;
  //   console.log(req.body["OSI stands for"]);
  MongoClient.connect(url, async (err, db)=> {
    if (err) throw err;
    var dbo = db.db("Studentdbex");// DB name(Studentdbex)
    //get the contents from Quiz collection 
    dbo.collection("Quiz").findOne({}, async (err, result)=> {
      if (err) throw err;
      else {
        var res = result;
        // console.log(res);
        for (var i = 1; i <= res.cn.length; i++) {
          //comparing the quiz results with the answers at the database;
          if (answers[result.cn[i - 1][`q${i}`]] === res.cn[i - 1][`ans${i}`]) {
            count++;
          }

        }
        console.log(count);
        const per=new performance({
          _id:req.session.usn,
          quiz1:count,
          sub:'Computer Networks'
        })
        const p= await per.save();

      }


      db.close();

    });
  });

  res.redirect("/quiz/quiz_result");
});

router.get('/quiz_result', checkUser, (req, res) => {
  res.render("quiz_result.ejs");
})
module.exports = router