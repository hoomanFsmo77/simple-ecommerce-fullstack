const express=require('express')
const db=require('../database')
const productRoute=express.Router()

productRoute.get('/',(req,res)=>{
    const getQuery=`SELECT * FROM products`
    db.ecommerceDB.query(getQuery,(error,value)=>{
        if(error){
            res.status(401).send('error in db')
        }else{
            res.status(200).send(value)
        }
    })
})

productRoute.get('/:id',(req,res)=>{
    const id=req.params.id
    const getQuery=`SELECT * FROM products WHERE id=${id}`
    db.ecommerceDB.query(getQuery,(error,value)=>{
        if(error){
            res.status(401).send('error in db')
        }else{
            res.status(200).send(value)
        }
    })

})


module.exports=productRoute
