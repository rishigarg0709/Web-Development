const express=require('express')
const server=express()
const session = require('express-session')
const passport = require('./routes/api/passport')
const indexroute=require('./routes/api/').route


server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use(session({
    secret: 'somesecretstring'
}))
server.use(passport.initialize())
server.use(passport.session())


server.set('view engine','hbs')

server.use("/",express.static(__dirname+"/public"))
server.use("/api",indexroute)

server.listen(6565,()=>{
    console.log("server is running at http://localhost:6565")
})

