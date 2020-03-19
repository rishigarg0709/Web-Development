const route=require('express').Router()

route.get("/",(req,res)=>{
    if(req.user){
        res.redirect('api/todo/'+req.user.id)
    }
    else{
        res.redirect('/')
    }
})

route.get("/:id", (req,res)=>{
    id=req.params.id
    res.send("hello "+id)
})

exports=module.exports={
    route
}