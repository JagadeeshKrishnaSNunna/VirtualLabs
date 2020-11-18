const mongoose=require('mongoose')

const performance=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    quiz1:{
        type:Number,
        default:null
    },
    sub:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('performance',performance)