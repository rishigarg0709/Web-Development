const express=require('express')
const server=express()

server.use(function(req,res,next){
    console.log("middelware function")
    next()
})


server.get('/',function(req,res,next){
    console.log("main function")
    res.send('Hello World !!')
})

server.get("/hello/:name", (req,res,next)=>{
    name=req.params.name
    surname=req.query.surname
    console.log("hello function")
    res.send("hello "+name+" "+surname)
})


// A 404 ERROR Middlewar
server.use((req,res)=>{
    res.send("<h2>404 Not Found !!</h2>")
})

server.listen(4040)