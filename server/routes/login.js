const express=require('express')
const db=require('../database')
const loginRoute=express.Router()

loginRoute.post('/',(req,res)=>{
    const body=req.body
    const getUserQuery=`SELECT * FROM users WHERE username="${body.username}" AND password=${body.password}`
    db.ecommerceDB.query(getUserQuery,(error,value)=>{
        if(error){
            res.status(404).send('user not found')
        }else{
            res.status(200).send({
                username:value[0].username,
                firstname:value[0].firstname,
                lastname:value[0].lastname,
            })
        }
    })
})




module.exports=loginRoute