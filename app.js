const express = require("express");
const app = express();
const session=require('express-session')
// const {c, cpp, node, python, java} = require('compile-run');
const studentRouter=require('./Routes/StudentAuth')  
const path = require('path');
const quiz=require('./public/js/cnquiz');
const {c, cpp, node, python, java} = require('compile-run');
const compile = require('./public/js/compile.js');
const bodyParser = require('body-parser');
const { stderr } = require("process");
app.set("View engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


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

app.use('/StudentAuthentication',studentRouter)

const checkUser=(req,res,next)=>{
  if(req.session.usn==undefined){
    res.redirect('/StudentAuthentication/Authentication')
  }else{next()}
}



app.get("/titles", checkUser, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'titles.html'));
    
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
app.get("/osi",checkUser,function(req,res){
    // new quiz();
  let q= new quiz();

  q.fun(res);
    // res.sendFile(path.join(__dirname,'views','osi.html'));
    // console.log(r);
    // console.log(q);
    // res.render("osi.ejs",{q:q});
    // res.re
});

app.post("/compile",checkUser, (req, res) => {

    // const sourcecode = req.body.code;// stores the source code
    const test ="";  //stores the input 
    var language = "python";
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







app.listen(3000, err => {
    if (err) console.log("OOPS!!server failed")
    else console.log("server started at port : 3000");
}); 
