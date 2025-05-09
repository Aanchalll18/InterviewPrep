const mongoose=require('mongoose')

const sessionschema=new mongoose.Schema({
    user:{type:mongoose.Schems.Types.objectId,ref:"User"},
    role:{type:String,required:true},
    expriences:{type:String,required:true},
    topicsToFocus:{type:String,required:true},
    description:String,
    quiestions:[{type:mongoose.Schema.Types.ObjectId, ref:"Questions"}]
},{timestamps:true})

module.exports=mongoose.model("Session",sessionschema)