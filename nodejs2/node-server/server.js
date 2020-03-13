const express=require('express')
const server=express()

server.use(express.json())
server.use(express.urlencoded({extended :true}))

//middleware function
server.use(function(req,res,next){
    console.log("middelware function")
    next()
})

//simple get function
server.get('/',function(req,res,next){
    console.log("main function")
    res.send('Hello World !!')
})

//get function with parameters
server.get("/hello/:name", (req,res,next)=>{
    name=req.params.name
    surname=req.query.surname
    console.log("hello function")
    res.send("hello "+name+" "+surname)
})

server.post('/',(req,res) => {
    name=req.body.name
    age=req.body.age
    console.log(name+" "+age)
    res.send(name+age)
})

// A 404 ERROR Middleware
server.use((req,res)=>{
    res.send("<h2>404 Not Found !!</h2>")
})

server.listen(4050)