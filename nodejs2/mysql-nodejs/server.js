const express = require('express')
const server= express()
const dbs=require('./db') 

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.set('view engine','hbs');

server.get("/",(req,res)=>{
    dbs.create_table()
    .then(function(){
        res.render('add')
    })
    .catch((err)=>{
        res.send(err)
    })
})

server.get("/show",(rew,res)=>{
    dbs.show_data()
    .then((persons)=>{
    res.render('show',{persons})
    })
    .catch((err)=>{
    res.send(err)
    })
    
})

server.post("/add",(req,res)=>{
    
    dbs.add_data(req.body.name,req.body.email,req.body.password)
    .then(
        function(){
            console.log("data added succesfully !!")
            res.render('add')
        }
    )
    .catch((err)=>{
    res.send(err)
    })
})

server.listen(4321,function(){
    console.log("server is running !!")
})