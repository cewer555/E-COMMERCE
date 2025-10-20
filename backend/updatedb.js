require("dotenv").config()
const mongoose=require("mongoose")
async function start(){
await mongoose.connect(process.env.MONGO_URI)
console.log("connected")
console.log("updating...")
const myschema=new mongoose.Schema({title:{type:String},image_url:{type:String},price:{type:String},discount:{type:String},recom:{type:Boolean}})
const products=mongoose.model("products",myschema)
const prod=await products.find({})
for(let i=9;i<=20;i++){
    await products.updateOne({_id:prod[i]._id},{$set:{recom:true}})
}
console.log("completed!!!")
}
start()