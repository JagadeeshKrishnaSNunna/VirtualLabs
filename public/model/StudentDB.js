const mongoose=require('mongoose')


const student=new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model('student',student)