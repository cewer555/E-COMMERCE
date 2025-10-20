const express=require("express")
const app=express()
const session=require("express-session")
const cors=require("cors")
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true,
    secure:false,
    cookie:{maxAge:60000}
}))

app.use(cors({
  origin: 'http://localhost:5173', // frontend origin
  credentials: true
}));
app.get("/",(req,res)=>{
    req.session.name="sam123"
    res.send("session set")                         

})
app.get("/getsession",(req,res)=>{
    console.log(req.session.name)
    res.send(req.session.name)          
})
app.listen(3000,()=>{       console.log("server started on port 3000")})            