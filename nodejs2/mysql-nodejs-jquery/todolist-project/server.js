const express=require("express")
const server=express()
const todoroute=require("./routes/todos")

server.use(express.urlencoded({extended:true}))

server.get("/hello",(req,res)=>{
    res.send("hello")
})

server.use("/",express.static(__dirname+"/public"))

server.use("/api",todoroute)  //todoroute is an api . It basically calls todos.js

console.log("server is running at port 5020!!")
server.listen(5020)
 


