require("dotenv").config()
const session=require("express-session")
const router=require("./routes")
const connectDB=require("./db")
const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true,
    secure:false,
    cookie:{maxAge:60000}
}))
app.use(express.json())
app.use(router)
const product=require("./models/model")
async function start(){
await connectDB(process.env.MONGO_URI)
console.log("connected to database")
app.listen(3000,()=>{
    console.log("server running at 3000...")
})
}
start()
