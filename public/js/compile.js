const {c, cpp, node, python, java} = require('compile-run');
const { stderr } = require("process");


 module.exports=class compile{
    com=(sourcecode,test,language)=>{
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
                // console.log(result);
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
    }
 }