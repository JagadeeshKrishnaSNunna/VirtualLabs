const express = require("express");
const app = express();
const session=require('express-session')
// const {c, cpp, node, python, java} = require('compile-run');
const studentRouter=require('./Routes/StudentAuth')  
const path = require('path');
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
app.get("/datastructures", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'datastructures.html'));

});
app.get("/stack", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'stack.html'));

});
app.get("/compile", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'compile.html'));
});

app.post("/compile", (req, res) => {

    const sourcecode = req.body.code;// stores the source code
    const test = req.body.test;  //stores the input 
    var language = req.body.langs;
    let c = new compile()
    c.com(sourcecode, test, language);
    res.redirect("/compile");

})

app.listen(3000, err => {
    if (err) console.log("OOPS!!server failed")
    else console.log("server started at port : 3000");
}); 