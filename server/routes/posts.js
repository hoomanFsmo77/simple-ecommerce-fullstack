const express=require('express')
const db=require('../database')
const postRoute=express.Router()

postRoute.get('/',(req,res)=>{
    const getAllQuery=`SELECT * FROM posts`
    db.ecommerceDB.query(getAllQuery,(err,value)=>{
        if(err){
            res.status(500).send('Error in getting data from db')
        }else{
            res.status(200).send(value)
        }
    })
})

postRoute.get('/:id',(req,res)=>{
    const id=req.params.id
    const getByIdQuery=`SELECT * FROM posts WHERE id=${id}`
    db.ecommerceDB.query(getByIdQuery,(err,value)=>{
        if(err){
            res.status(500).send('Error in getting data from db')
        }else if(value.length>0){
            res.status(200).send(value)
        }else{
            res.status(404).send('Post not found')
        }
    })
})
postRoute.delete('/:id',(req,res)=>{
    const id=req.params.id
    const deleteQuery=`DELETE FROM posts WHERE id=${id}`
    db.ecommerceDB.query(deleteQuery,(err,value)=>{
        if(err){
            res.status(500).send('Error in getting data from db')
        }else if(value.affectedRows>0){
            res.status(200).send(`post by id:${id} deleted`)
        }else {
            res.status(404).send('Post not found')
        }
    })
})

postRoute.post('/',(req,res)=>{
    const body=req.body
    if(body.title && body.body){
        const addPostQuery=`INSERT INTO posts VALUES(NULL,"${body.title}","${body.body}")`
        db.ecommerceDB.query(addPostQuery,(err,value)=>{
            if(err){
                res.status(500).send('Error in getting data from db')
            }else{
                res.status(200).send({
                    userId:value.insertId,
                    message:'User added'
                })
            }
        })
    }else{
        res.status(500).send('missing required body params')
    }
})

postRoute.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    if(body.title && body.body && id){
        const updatePostQuery=`UPDATE posts SET title="${body.title}",body="${body.body}" WHERE id=${id}`
        db.ecommerceDB.query(updatePostQuery,(err,value)=>{
            if(err){
                res.status(500).send('Error in getting data from db')
            }else if(value.affectedRows>0){
                res.status(200).send(`post by id:${id} updated`)

            }else{
                res.status(404).send('Post not found')
            }
        })
    }else{
        res.status(500).send('missing required body and id params')
    }
})



module.exports=postRoute