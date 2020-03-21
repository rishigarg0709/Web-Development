const route=require('express').Router()
const loginroute=require('./login').route
const logoutroute=require('./logout').route
const signuproute=require('./signup').route 
const todoroute=require('./todo').route


route.use('/login',loginroute)
route.use('/logout',logoutroute)
route.use('/signup',signuproute)
route.use('/todo',todoroute)

exports=module.exports={
    route
}


