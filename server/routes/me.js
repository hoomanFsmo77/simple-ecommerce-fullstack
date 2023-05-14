const express=require('express')
const db=require('../database')
const meRoute=express.Router()

meRoute.post('/',(req,res)=>{
    const token=req.body.Token
    if(token){
        const getQuery=`SELECT username,lastname,firstname FROM users WHERE token="${token}"`
        db.ecommerceDB.query(getQuery,(error,value)=>{
           if(error){
               res.status(402).send('invalid token')
           }else{
               res.status(200).send(value)
           }
        })

    }else{
        res.status(401).send('missing required Token')
    }




})







module.exports=meRoute