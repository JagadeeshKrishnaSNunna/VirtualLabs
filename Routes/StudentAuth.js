const express = require('express')

const bcrypt=require('bcrypt')//encrypting the password


//mongoDB connection
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Studentdbex'
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection
con.on('open', function () { console.log("mogoDB connection established  successfully..!") })
const students = require('../public/model/StudentDB')//DB Schema


var bodyParser = require('body-parser')
const router = express.Router()
const path = require('path');
const session = require('express-session');


var urlencodedParser = bodyParser.urlencoded({ extended: true })

//Session middleware
const redirect = (req, res, next) => {
    if (req.session.usn != undefined) {
        // module.exports=req.session.usn;
        res.redirect('/titles')
    } else { next() }
}
const checkUser = (req, res, next) => {
    if (req.session.usn == undefined) {
        res.redirect('/StudentAuthentication/Authentication')
    } else { next() }
}


//Login Page
router.get("/Authentication", redirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'));
});
router.post("/Authentication", redirect, urlencodedParser, async (req, res) => {
    var id = req.body.usn
    // document.getElementById("user").innerHTML=id;
    const student = await students.findById(id)
    if (student == null) {
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterUsnCheck.html'));
    } else {
        try{
            bcrypt.compare(req.body.password,student.password,(err,result)=>{
                if(result){
                    req.session.usn = id; 
                    res.redirect("/titles");
                }else{
                    res.redirect("/StudentAuthentication/Authentication");
                }
            })

        }catch (e){

        }

    }

});


//check usn 

router.get("/StudentRegisterUsn", redirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterUsnCheck.html'));
});
router.post("/StudentRegisterUsn", redirect, urlencodedParser, async (req, res) => {
    var id = req.body.usn
    const student = await students.findById(id)

    if (student != null) {
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterDetails.html'));
    }
});



//Register user Details

router.get("/StudentRegisterDetails", redirect, (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterDetails.html'));
});

router.post("/StudentRegisterDetails", redirect, urlencodedParser, async (req, res) => {
    try{
        const hashedpassword=await bcrypt.hash(req.body.pass,10)
        const student = new students({
            _id: req.body.usn,
            name: req.body.Studentname,
            password: hashedpassword
        })
        const s = await student.save();
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'));

    }catch (e){
        res.redirect('/StudentAuthentication/StudentRegisterDetails')
    }
});




//logout

router.get('/Logout', checkUser, urlencodedParser, (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/titles");
        }
        res.clearCookie("StudentUSN");
        console.log("logged out successful..!");
        res.redirect('/StudentAuthentication/Authentication')
    })

})


module.exports = router