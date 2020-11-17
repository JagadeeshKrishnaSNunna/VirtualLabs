
const express = require("express");
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const bodyParser = require('body-parser');
app.set("View engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));
module.exports= class Quiz_solve{
 

  async  fun(res){
 MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("Studentdbex");// DB name(Studentdbex)
           //get the contents from Quiz collection 
            dbo.collection("Quiz").findOne({}, function(err, result) {
              if (err) throw err;
                else{
                    // console.log(result);
                     
                    res.render("osi.ejs",{result:result});


                    
                   
                }
               
            
              db.close();
              
            });
          });
         
        }
       
        
      }


 