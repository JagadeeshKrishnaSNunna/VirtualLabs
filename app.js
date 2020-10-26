const express =require("express");
const app = express();
const {c, cpp, node, python, java} = require('compile-run');
const path = require('path');
const bodyParser = require('body-parser');
const { stderr } = require("process");
app.set("View engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'));
  
});
app.get("/titles",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','titles.html'));
  
});
app.get("/datastructures",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','datastructures.html'));
  
});
app.get("/stack",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','stack.html'));
  
});
app.get("/compile",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','compile.html'));
})
app.post("/compile",(req,res)=>{
    
const sourcecode=req.body.code;// stores the source code
const test =req.body.test;  //stores the input 
var language=req.body.langs;
// console.log(req.body.langs);
console.log(sourcecode);
if(language==="cpp"){
    // console.log("entered cpp");
    let resultPromise = cpp.runSource(sourcecode, { stdin:test });
    resultPromise
    .then(result => {
        if(result.stderr===''){
            console.log("no errpr");
            console.log(result.stdout);
        }else if(result.stderr!==''){
            console.log("error part");
            console.log(result);
        }
        
    })
    .catch(err => {
        console.log(err);
    });
}else if(language==="c++"){

}else if(language==="java"){
    // console.log(typeof sourcecode);
    java.runFile("C:\\Users\\Ajaykumar\\Desktop\\Sample.java",{
        compilationPath: 'C:\\Program Files\\Java\\jdk1.8.0_251\\bin\\javac',
        executionPath: 'C:\\Program Files\\Java\\jdk1.8.0_251\\bin\\java'
    },(err,result)=>console.log(err ? err : result.stdout));

   // Since the java.runsource()  is not working in java.
    // let resultPromise = java.runSource(sourcecode);
    // resultPromise                                                        
    //     .then(result => {
    //         console.log(result.stdout);//result object
    //     })
    //     .catch(err => {
    //         console.log("error has occures");
    //         console.log(err);
    //     });
}else if(language==="python"){
let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
}

 
    res.redirect("/compile");
  
})

app.listen(3000,err =>{
    if(err)console.log("OOPS!!server failed")
    else console.log("server started");
    }); 