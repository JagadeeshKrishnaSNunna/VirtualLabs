const express = require("express");
const app = express();
const session=require('express-session')
// const {c, cpp, node, python, java} = require('compile-run');
const studentRouter=require('./Routes/StudentAuth')  
const quiz_solution=require('./Routes/quiz_solution') 
const path = require('path');
// const quiz=require('./public/js/cnquiz');

const compile = require('./public/js/compile.js');
const quizquestions =require('./public/js/questions')
const bodyParser = require('body-parser');


app.set("View engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public/js')));


app.get("/", (req, res) => {
  
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
    

});
// Register Shit
app.use(session({
    secret:'secretekey',
    resave:false,
    saveUninitialized:false,
    name:"StudentUSN",
    cookie:{
        maxAge:1000*60*60,
        sameSite:true,
    }
}))

app.use('/StudentAuthentication',studentRouter);
app.use('/quiz',quiz_solution);


const checkUser=(req,res,next)=>{
  if(req.session.usn==undefined){
    res.redirect('/StudentAuthentication/Authentication')
  }else{next()}
}

//  const getUsn=(req,res,next)=>{
//     if(req.session.usn==undefined){
//         next()
//     }else{
         
//         console.log(req.session.usn);
        
//         // getusn(req.session.usn);
//         next();
//     }
    
// }

app.get("/titles", checkUser, (req, res) => {
    
    res.sendFile(path.join(__dirname, 'views', 'titles.html'));
    // res.sendFile(path.join(__dirname, 'public/js', 'questions.js'))
    
});
app.get("/datastructures", checkUser,(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'datastructures.html'));

});
app.get("/stack", checkUser,(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'stack.html'));

});
app.get("/compile",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'compile.html'));
});
app.get("/cn",checkUser,(req,res)=>{
    res.sendFile(path.join(__dirname,'views','cn.html'));
});


app.post("/compile",checkUser, (req, res) => {

    // const sourcecode = req.body.code;// stores the source code
    const test ="";  //stores the input 
    var language = "cpp";
const sourcecode =req.body.code;
// console.log(test);
    let c = new compile()
    c.com(sourcecode, test, language);
    res.redirect("/compile");

});
app.get("/placement",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'placement.html'));
});
app.get("/problem1",checkUser,(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem1.html'));
});
app.get("/problem2",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem2.html'));
});
app.get("/problem3",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem3.html'));
});
app.get("/ExceptionalHand",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ExceptionalHand.html'));
});
app.get("/cn",checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cn.html'));
});
app.get("/networkutilities",checkUser,(req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'networkutilities.html'));
});
app.get("/logout",(req,res)=>{
    
})





var PORT=process.env.PORT ||3000;
app.listen(PORT, err => {
    if (err) console.log("OOPS!!server failed")
    else console.log("server started at port : 3000");
}); 
