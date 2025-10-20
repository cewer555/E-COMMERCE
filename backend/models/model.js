const mongoose=require("mongoose")
const myschema=new mongoose.Schema({title:{type:String},image_url:{type:String},price:{type:String},discount:{type:String},recom:{type:Boolean}})
module.exports=mongoose.model("products",myschema)