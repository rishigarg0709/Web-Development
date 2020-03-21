const route=require('express').Router()
const Users = require('../../config/db').user
const bcrypt = require('bcryptjs');

route.get("/",(req,res)=>{
    res.render('signup')
})

route.post('/', (req, res) => {

    Users.findOne({
        where: {
            emailid:req.body.emailid
        }
    }).then((user) => {
        if (user) {
            req.flash('error_msg', 'This Email-Id already exists');
            res.render('signup');
        }
        else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                  if (err) throw err;
                  Users.create ({
                    name: req.body.name,
                    emailid: req.body.emailid,
                    password: hash
                    }).then((createdUser) => {
                        req.flash('success_msg','You are now registered and can log in')
                        res.redirect('/api/login')
                    })    
                }
            )}) 
        }  
    })
})

exports=module.exports={
    route
}

