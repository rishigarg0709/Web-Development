const route=require('express').Router()

route.get("/",(req,res)=>{
    console.log("I am here")
    req.logout()
    req.flash('success_msg', 'You are logged out');
    res.redirect('/')
}) 

exports=module.exports={
    route
}

