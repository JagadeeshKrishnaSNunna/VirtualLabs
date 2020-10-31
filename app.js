const express = require("express");
const app = express();
//const mongoose = require('mongoose');
//const url = 'mongodb://localhost/Studentdbex'
//mongoose.connect(url, { useNewUrlParser: true });
//const con = mongoose.connection
//con.on('open', function () { console.log("connection established") })
//const students = require('./public/model/StudentDB')
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

app.use('/StudentAuthentication',studentRouter)




app.get("/titles", (req, res) => {
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
app.get("/cn",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','cn.html'));
});
app.get("/osi",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','osi.html'));
});

app.post("/compile", (req, res) => {

    const sourcecode = req.body.code;// stores the source code
    const test = req.body.test;  //stores the input 
    var language = req.body.langs;
    let c = new compile()
    c.com(sourcecode, test, language);
    res.redirect("/compile");

});
app.get("/placement", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'placement.html'));
});
app.get("/problem1", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem1.html'));
});
app.get("/problem2", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem2.html'));
});
app.get("/problem3", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'problem3.html'));
});
app.get("/ExceptionalHand", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'ExceptionalHand.html'));
});
app.get("/cn", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cn.html'));
});
app.get("/networkutilities", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'networkutilities.html'));
});







app.listen(3000, err => {
    if (err) console.log("OOPS!!server failed")
    else console.log("server started at port : 3000");
}); 