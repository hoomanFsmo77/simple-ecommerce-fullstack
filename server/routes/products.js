const express=require('express')
const database=require('../database')
const productRoute=express.Router()

productRoute.get('/',(req,res)=>{
    database('products').select('*').then(response=>{
        res.status(200).send(response)
    }).catch(err=>{
        res.status(401).send('error in db')
    })
})

productRoute.get('/:id',(req,res)=>{
    const id=req.params.id
    database('products').select('*').where('id',id).then(response=>{
        res.status(200).send(response)
    }).catch(err=>{
        res.status(401).send('error in db')
    })
})


module.exports=productRoute
