const express=require('express')
const database=require('../database')
const meRoute=express.Router()

meRoute.post('/',(req,res)=>{
    const token=req.headers.authorization
    if(token){
        database('users').select(['username','lastname','firstname']).where('token',token).then(response=>{
            res.status(200).send(response[0])
        }).catch(err=>{
            res.status(402).send('invalid token')
        })
    }else{
        res.status(401).send('missing required Token')
    }




})







module.exports=meRoute