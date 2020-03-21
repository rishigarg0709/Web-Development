const route=require('express').Router()
const passport = require('passport')

route.get("/",(req,res)=>{
    res.render('login')
}) 

route.post('/', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/api/todo',
      failureRedirect: '/api/login',
      failureFlash: true
    })(req, res, next)
  });

exports=module.exports={
    route
}