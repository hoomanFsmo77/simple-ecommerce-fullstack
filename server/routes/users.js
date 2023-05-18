const express=require('express')
const database=require('../database')
const usersRoute=express.Router()
const crypto=require('crypto')
const checkBody = (body) => {
    return !!(body.username && body.firstname && body.lastname && body.password);
}

usersRoute.get('/',(req,res)=>{
    const limit=req.query.limit
    database.select('*').from('users').then(response=>{
        const target=response.map(item=>{
            return {username:item.username,firstname:item.firstname,lastname:item.lastname,id:item.id}
        })
        if(limit){
            res.status(200).send(target.slice(0,limit))
        }else{
            res.status(200).send(target)
        }
    }).catch(err=>{
        res.status(400).send('error in connecting to db')
    })
})
usersRoute.delete('/:id',(req,res)=>{
    const id=req.params.id
    if(id){
        database.from('users').where('id',id).del().then(response=>{
            res.status(201).send(`user by id : ${id} removed`)
        }).catch(err=>{
            res.status(400).send('error in connecting to db')
        })
    }else{
        res.status(404).send('missing required params id')
    }
})
usersRoute.post('/',(req,res)=>{
    const body=req.body
    if(checkBody(body)){
        const generateRandomToken=crypto.randomBytes(32).toString("hex")
        database('users').insert({
            id:null,
            username:body.username,
            firstname:body.firstname,
            lastname:body.lastname,
            token:generateRandomToken,
            password:body.password
        }).then(response=>{
            res.status(201).send({
                msg:'user created',
                userId:response.insertId,
                token:generateRandomToken
            })
        }).catch(err=>{
            res.status(400).send('error in connecting to db')
        })
    }else{
        res.status(401).send('All inputs are required!')
    }

})
usersRoute.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    if(id ){
        database('users').where('id',id).update(body).then(response=>{
            res.status(202).send('user edited')
        }).catch(err=>{
            res.status(401).send('error in db')
        })
    }else{
        res.status(404).send('missing required params id ')
    }

})
usersRoute.get('/:id',(req,res)=>{
    const id=req.params.id
    if(id){
        database('users').select(['firstname','lastname','username']).where('id',id).then(response=>{
            res.status(200).send(response)
        }).catch(err=>{
            res.status(401).send('error in db')
        })
    }else{
        res.status(404).send('missing required params id ')
    }

})

module.exports=usersRoute