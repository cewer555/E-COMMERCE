const nodemailer=require("nodemailer")
require("dotenv").config()
const transporter=nodemailer.createTransport({
    servive:"secure",
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:process.env.EMAIL_USER
    ,    pass:process.env.EMAIL_PASS
    }})
function send(to,subject,msg){
    transporter.sendMail({
        from:process.env.EMAIL_USER,
        to:to,
        subject:subject,
        html:msg
    })
console.log("email sent")
}
module.exports=send
