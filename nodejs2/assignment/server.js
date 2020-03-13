const express=require('express')
const server=express()

server.use(express.urlencoded({extended:true}))

todos=[]

server.get("/",(req,res)=>{
    res.send(todos)
})

server.get("/:id",(req,res)=>{
    id=req.params.id
    res.send(todos[id-1])
})

server.post("/",(req,res)=>{
    task={
        name:req.body.name,
        done:req.body.done
    }
    console.log(req.body.done)
    console.log(req.body.name)
    todos.push(task)
    res.send(todos)
})

server.delete("/:id",(req,res)=>{
    id=req.params.id
    delete todos[id-1]
    res.send(todos)
})

server.patch("/:id",(req,res)=>{
    id=req.params.id
    task={
        name:req.body.name,
        done:req.body.done
    }
    todos[id-1]=task
    res.send(todos)
})

server.listen(5000)

