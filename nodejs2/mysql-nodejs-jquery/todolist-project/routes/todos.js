const express=require('express')
const route=express.Router()
const db=require('../db')

route.get("/task",(req,res)=>{

    db.create_table()
    
    db.show_task()
    .then(function(data){
        res.send(data)
    })
    .catch(function(err){
        res.send(err)
    })
})

route.get("/:id",(req,res)=>{
    id=req.params.id
    res.send(todos[id-1])
})

route.post("/task",(req,res)=>{

    db.add_task(req.body.name)
    .then(function(){
        res.redirect('/api/task')
    })
    .catch(function(err){
        res.send(err)
    })

})

route.delete("/:id",(req,res)=>{
    id=req.params.id
    delete todos[id-1]
    res.send(todos)
})

route.patch("/:id",(req,res)=>{
    id=req.params.id
    task={
        name:req.body.name,
        done:req.body.done
    }
    todos[id-1]=task
    res.send(todos)
})

module.exports=route

