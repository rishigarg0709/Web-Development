const express=require('express')
const route=express.Router()

todos=[]

route.get("/",(req,res)=>{
    res.send(todos)
})

route.get("/:id",(req,res)=>{
    id=req.params.id
    res.send(todos[id-1])
})

route.post("/",(req,res)=>{
    task={
        name:req.body.name,
        done:req.body.done
    }
    todos.push(task)
    res.send(todos)
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

