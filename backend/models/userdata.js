const mongoose=require("mongoose")
const mySchema=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
module.exports=mongoose.model("UserData",mySchema)