const express= require('express');

// const mongoose = require('mongoose');
const studentRouter=require('./StudentAuth') ;
// const url = 'mongodb://localhost/Studentdbex'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const quiz=require('../public/js/cnquiz');
// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection
// con.on('open', function () { console.log("mogoDB connection established with quiz") })
const Quiz = require('../public/model/QuizDb')//DB Schema



var bodyParser = require('body-parser')
const router = express.Router()
const path = require('path');
const session = require('express-session');


var urlencodedParser = bodyParser.urlencoded({ extended: true });


const checkUser=(req,res,next)=>{
    if(req.session.usn==undefined){
      res.redirect('/StudentAuthentication/Authentication')
    }else{next()}
  }

//get the quiz questions from the db and print in osi.ejs
router.get("/osi", checkUser, (req,res)=>{
    // new quiz();
  let q= new quiz();

  q.fun(res);
  
});

router.post("/osi", urlencodedParser, async (req,res)=>{
   
    console.log(req.session.usn);
    var count=0;

    //this well fetch the test results of the quiz
    var answers =req.body;
    //   console.log(req.body["OSI stands for"]);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Studentdbex");// DB name(Studentdbex)
       //get the contents from Quiz collection 
        dbo.collection("Quiz").findOne({}, function(err, result) {
            if (err) throw err;
            else{
               var res=result;
                 
              for(var  i=1;i<=res.cn.length;i++){
                  //comparing the quiz results with the answers at the database;
                  if(answers[result.cn[i-1][`q${i}`]]===res.cn[i-1][`ans${i}`]){
                      console.log(answers[result.cn[i-1][`q${i}`]]);
                      console.log(res.cn[i-1][`ans${i}`])
        count ++;
                  }
                  
              }
     console.log(count);   
               
            }
           
        
          db.close();
          
        });
      });
      
      res.redirect("/quiz/quiz_result");
    });

    router.get('/quiz_result',checkUser,(req,res)=>{
        res.render("quiz_result.ejs");
    })
    module.exports = router