const route=require('express').Router()
const Users = require('./db').user

route.get("/",(req,res)=>{
    res.render('signup')
})

route.post('/', (req, res) => {
    Users.create ({
        name: req.body.name,
        emailid: req.body.emailid,
        password: req.body.password
    }).then((createdUser) => {
        res.redirect('/api/login')
    })
})

exports=module.exports={
    route
}