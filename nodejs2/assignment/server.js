const express=require("express")
const server=express()
const todoroute=require("./routes/todos")

server.use(express.urlencoded({extended:true}))

server.get("/hello",(req,res)=>{
    res.send("hello")
})

server.use("/public",express.static(__dirname+"/public"))

server.use("/routes",todoroute)  //todoroute is an rest api

console.log("server is running !!")
server.listen(5010)


