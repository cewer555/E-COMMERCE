const express=require("express")
const bcrypt=require("bcrypt")
const product=require("./models/model")
const Userdb=require("./models/userdata")
const router=express.Router()
const send=require("./mailer")


router.get("/api/v1/recom",async (req,res)=>{
    const val=await product.find()
    let response=val.filter((item)=>{
        if(item.recom
        ){

            return item
        }
    })

    res.status(200).json(response);
    // res.status(200).end()
})
router.get("/api/v1/discounts",async (req,res)=>{
    if(req.session.user){
    const val=await product.find()
    let response=val.filter((item)=>{
        if(item.discount
        ){

            return item
        }
    })

    res.status(200).json(response);
}else{
    res.status(401).send("session expired")
}
    // res.status(200).end()
})
router.post("/api/v1/searchQuery",async (req,res)=>{ 
    let query=req.body.query 
    const val=await product.find() 
    let response=val.filter((item)=>{ 
        let title=item.title.toLowerCase() 
        if(title.includes(query) && title[title.indexOf(query)-1]===" " && title[title.indexOf(query)+query.length+1]!=" "){
             return item } }) 
             res.status(200).json(response);
              res.status(200).end() })
router.get("/api/v1/main",(req,res)=>{
    console.log("main was hit")
    res.status(200).json(product);
    res.status(200).end()
})
router.post("/api/v1/login",async (req,res)=>{
    if(!req.session.user){
    const {email,password}=req.body
    const dbuser=await Userdb.findOne({email:email})
    console.log(dbuser)
    const dbpassword=dbuser.password
    const ispasswordmatch=await bcrypt.compare(password,dbpassword)
        if(email===dbuser.email && ispasswordmatch){
        req.session.user={email:email}
        res.status(200).json({status:"ok"})
    }
    else{
        res.status(200).json({status:"error"})
    }           
    }
    else{
        res.status(200).json({status:"ok"})}
})
router.post("/api/v1/Register",async (req,res)=>{
    const {name,email,password}=req.body
    send(email,"email verification","<a>click here to verify</a>")
    console.log("register hit",password,name,email)
    const hashedPassword=await bcrypt.hash(password,10)
    await Userdb.create({
        username:name,
        email:email,
        password:hashedPassword
    })
    res.status(200).json({status:"ok"})
    res.end()
})
// router.get("/api/v1/main",async (req,res)=>{
//     const response=await product.find()
//     console.log("main was hit")
//     res.status(200).json(response);
//     res.status(200).end()
// })
module.exports=router