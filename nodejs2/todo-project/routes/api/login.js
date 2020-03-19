const route=require('express').Router()
const passport = require('./passport')

route.get("/",(req,res)=>{
    res.render('login')
}) 

route.post('/', 
    passport.authenticate('local', {
    failureRedirect: '/api/signup',
    successRedirect: '/api/todo'
}))

exports=module.exports={
    route
}