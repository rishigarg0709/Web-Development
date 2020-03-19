const route=require('express').Router()
const loginroute=require('./login').route
const signuproute=require('./signup').route 
const todoroute=require('./todo').route


route.use('/login',loginroute)
route.use('/signup',signuproute)
route.use('/todo/',todoroute)
route.use('api/todo/:id',todoroute)

exports=module.exports={
    route
}


