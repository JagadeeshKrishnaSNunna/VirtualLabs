const mongoose=require('mongoose')

const quiz=new mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    sub_name:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        require:true,
    }
});

module.exports=mongoose.model('quiz',quiz)