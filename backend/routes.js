const express=require("express")
const product=require("./models/model")
const router=express.Router()

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
router.post("/api/v1/login",(req,res)=>{
    const {email,password}=req.body
    console.log(email,password,req.session.user)
    if(!req.session.user){
        if(email==="mohammedsameer120905@gmail.com" && password==="sameer123"){
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
// router.get("/api/v1/main",async (req,res)=>{
//     const response=await product.find()
//     console.log("main was hit")
//     res.status(200).json(response);
//     res.status(200).end()
// })
module.exports=router