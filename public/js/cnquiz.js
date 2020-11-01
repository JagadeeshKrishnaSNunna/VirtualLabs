// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionIndex = function() {
//     return this.questions[this.questionIndex];
// }

// Quiz.prototype.guess = function(answer) {
//     if(this.getQuestionIndex().isCorrectAnswer(answer)) {
//         this.score++;
//     }

//     this.questionIndex++;
// }

// Quiz.prototype.isEnded = function() {
//     return this.questionIndex === this.questions.length;
// }


// function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }

// Question.prototype.isCorrectAnswer = function(choice) {
//     return this.answer === choice;
// }


// function populate() {
//     if(quiz.isEnded()) {
//         showScores();
//     }
//     else {
//         // show question
//         var element = document.getElementById("question");
//         element.innerHTML = quiz.getQuestionIndex().text;

//         // show options
//         var choices = quiz.getQuestionIndex().choices;
//         for(var i = 0; i < choices.length; i++) {
//             var element = document.getElementById("choice" + i);
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }

//         showProgress();
//     }
// };

// function guess(id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function() {
//         quiz.guess(guess);
//         populate();
//     }
// };


// function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// };

// function showScores() {
//     var gameOverHTML = "<h1>Result</h1>";
//     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHTML;
// };

// // create questions here
// var questions = [
//     new Question("OSI stands for",["open system interconnection","operating system interface","optical service implementation","open service Internet"],"open system interconnection"),
//     new Question("Routers operate at which layer of the OSI model?", ["Physical", "Transport","Network", "MAC sublayer of the data link layer"], "Network"),
//     new Question("The number of layers in ISO OSI reference model is ", ["2", "5", "6", "7"], "7"),
//     new Question("Which of the following is private IP address?", ["12.0.0.1", "168.172.19.39","172.15.14.36", "192.168.24.43"], "192.168.24.43"),
//     new Question("Which transmission layer has the highest transmission speed   in a network", ["coaxial cable", "twisted pair cable", "optical fiber", "electrical cable"], "optical fiber"),
//     new Question("Which class of IP address provides a maximum of only 254 host addresses per network ID?", ["Class A", "Class B", "Class C", "Class D"], "Class C"),
//     new Question("Which of the protocol is not used in the network layer of the TCP/IP model?", ["ICMP","IP","IGMP","HTTP"], "HTTP"),
//     new Question("Which of the following command is used to manipulate TCP/IP routing table?",["Show ip route","Ipconfig","Route","Traceroute"],"Route"),
//     new Question("OSI stands for",["open system interconnection","operating system interface","optical service implementation","open service Internet"],"open system interconnection"),
//     new Question(" In __________________ layer, vulnerabilities are directly associated with physical access to networks and hardware.",["physical","data-link","network","application", "physical"])
// ];

// // create quiz
// var quiz = new Quiz(questions);

// // display quiz
// populate();



const express = require("express");
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const bodyParser = require('body-parser');
app.set("View engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));
module.exports= class Quiz_solve{
 name="ajay";
 quiz_res="dalkjsd";

//  Quiz_solve(){
//     //  this.name="ajay";
//      this.quiz_res="ajhkd";
//      MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("Studentdbex");// DB name(Studentdbex)
//        //get the contents from Quiz collection 
//         dbo.collection("Quiz").findOne({}, function(err, result) {
//           if (err) throw err;
//             console.log(result);
//         //   var quiz = new Quiz(result);
        
//           db.close();
//           return "Gejje";
//         });
//       });
//  }

        fun(res){
 MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Studentdbex");// DB name(Studentdbex)
           //get the contents from Quiz collection 
            dbo.collection("Quiz").findOne({}, function(err, result) {
              if (err) throw err;
                else{
                    console.log(result);
                    var rest=result.cn;
                    res.render("osi.ejs",{result:result});
                    
                }
            //   var quiz = new Quiz(result);
            
              db.close();
              
            });
          });
         
        }
       
        
} 
    
    
