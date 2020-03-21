const route=require('express').Router()

route.get("/",(req,res)=>{
    
    if(req.user)
    {
        res.render('todo', {
            user: req.user
          })
    }
    else
    res.redirect('/api/login')
})


exports=module.exports={
    route
}

