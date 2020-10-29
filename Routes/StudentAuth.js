const express = require('express')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Studentdbex'
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection
con.on('open', function () { console.log("connection established") })
const students = require('../public/model/StudentDB')


var bodyParser = require('body-parser')
const router = express.Router()
const path = require('path')



var urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get("/Authentication", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'), { name: 'ola' });
});
router.post("/Authentication", urlencodedParser, async (req, res) => {
    var id=req.body.usn
    const student = await students.findById(id)
    if(student==null){
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterUsnCheck.html'));
    }else{
        if(student.password==req.body.password){
            res.sendFile(path.join(__dirname, '..', 'views', 'titles.html'));
        }
        else{
            res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'));
        }
        
    }
    
});




router.get("/StudentRegisterUsn", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterUsnCheck.html'));
});
router.post("/StudentRegisterUsn", urlencodedParser, async (req, res) => {
    var id=req.body.usn
    const student = await students.findById(id)
    
    if (student!= null) {
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentAuthentication.html'),{msg:`${id} Already registered`});
    }
    else {
        res.sendFile(path.join(__dirname, '..', 'views', 'StudentRegisterDetails.html'));
    }
});



router.get("/StudentRegisterDetails", (req, res) => {
    res.sendFile(path.join(__dirname, '..' ,'views', 'StudentRegisterDetails.html'));
});

router.post("/StudentRegisterDetails", urlencodedParser,async(req, res) => {
    const student=new students({
        _id:req.body.usn,
        name:req.body.Studentname,
        password:req.body.pass
    })
    const s=await student.save();
    console.log(s);
    res.send()
    //res.sendFile(path.join(__dirname, '..' ,'views', 'StudentRegisterDetails.html'));
});



module.exports = router