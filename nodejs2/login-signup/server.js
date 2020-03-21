const express=require('express')
const server=express()
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash');
const indexroute=require('./routes/api/').route

require('./config/passport')(passport);


server.use(express.urlencoded({extended:true}))
server.use(express.json())

server.use(session({
    secret: 'somesecretstring'
}))
server.use(passport.initialize())
server.use(passport.session())

// Connect flash
server.use(flash());

// Global variables
server.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


server.set('view engine','hbs')

server.use("/",express.static(__dirname+"/public"))
server.use("/api",indexroute)

server.listen(6565,()=>{
    console.log("server is running at http://localhost:6565")
})

