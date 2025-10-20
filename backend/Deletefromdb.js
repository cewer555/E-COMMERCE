require("dotenv").config()
const mongoose=require("mongoose")
async function start(){
await mongoose.connect(process.env.MONGO_URI)
console.log("connected")
console.log("deleting...")
const myschema=new mongoose.Schema({title:{type:String},image_url:{type:String},price:{type:String}})
const products=mongoose.model("products",myschema)
await products.deleteMany({})
console.log("completed!!!")
}
start()