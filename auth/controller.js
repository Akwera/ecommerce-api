const login=((req,res)=>{
    const username="Beatrice"
    const password="123"
    if(username==req.body.username&&password==req.body.password){
        res.send("login successful")
    }else{
        res.send("wrong username and password")
    }
    
})
module.exports=login