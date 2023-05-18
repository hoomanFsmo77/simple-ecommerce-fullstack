const express=require('express')
const database=require('../database')
const postRoute=express.Router()


postRoute.get('/',(req,res)=>{
    database('posts').select('*').then(response=>{
        res.status(200).send(response)
    }).catch(err=>{
        res.status(500).send('Error in getting data from db')
    })
})
postRoute.get('/:id',(req,res)=>{
    const id=req.params.id

    database('posts').select('*').where('id',id).then(response=>{
        res.status(200).send(response)
    }).catch(err=>{
        res.status(404).send('Post not found')
    })
})
postRoute.delete('/:id',(req,res)=>{
    const id=req.params.id
    database('posts').where('id',id).del().then(response=>{
        res.status(200).send(`post by id:${id} deleted`)
    }).catch(err=>{
        res.status(404).send('Post not found')
    })
})
postRoute.post('/',(req,res)=>{
    const body=req.body
    if(body.title && body.body){
        database('posts').insert({
            id:null,
            title:body.title,
            body:body.body
        }).then(response=>{
            res.status(200).send({
                userId:response.insertId,
                message:'User added'
            })
        }).catch(err=>{
            res.status(500).send('Error in getting data from db')
        })

    }else{
        res.status(500).send('missing required body params')
    }
})

postRoute.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    if(body.title && body.body && id){
        database('posts').where('id',id).update({
            title:body.title,
            body:body.body
        }).then(response=>{
            res.status(200).send(`post by id:${id} updated`)
        }).catch(err=>{
            res.status(404).send('Post not found')
        })
    }else{
        res.status(500).send('missing required body and id params')
    }
})



module.exports=postRoute