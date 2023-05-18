const express=require('express')
const database=require('../database')
const loginRoute=express.Router()

loginRoute.post('/',(req,res)=>{
    const body=req.body
    if(body.username && body.password){
        database('users').select('*').where({
            username:body.username,
            password:body.password
        }).then(response=>{
            res.status(200).send({
                username:response[0].username,
                firstname:response[0].firstname,
                lastname:response[0].lastname,
                token:response[0].token
            })
        }).catch(err=>{
            res.status(400).send('User not found!')
        })
    }else{
        res.status(400).send('All inputs is needed to be filled!')
    }

})




module.exports=loginRoute