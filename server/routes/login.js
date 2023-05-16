const express=require('express')
const db=require('../database')
const loginRoute=express.Router()

loginRoute.post('/',(req,res)=>{
    const body=req.body
    if(body.username && body.password){
        const getUserQuery=`SELECT * FROM users WHERE username="${body.username}" AND password=${body.password}`
        db.ecommerceDB.query(getUserQuery,(error,value)=>{
            if(error){
                res.status(400).send('User not found!')
            }else if(value.length>0){
                res.status(200).send({
                    username:value[0].username,
                    firstname:value[0].firstname,
                    lastname:value[0].lastname,
                    token:value[0].token
                })
            }else{
                res.status(400).send('User not found!')
            }
        })
    }else{
        res.status(400).send('All inputs is needed to be filled!')
    }

})




module.exports=loginRoute