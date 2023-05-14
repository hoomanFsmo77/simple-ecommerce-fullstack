const express=require('express')
const db=require('../database')
const usersRoute=express.Router()
const crypto=require('crypto')
const checkBody = (body) => {
    return !!(body.username && body.firstname && body.lastname && body.password);
}

usersRoute.get('/',(req,res)=>{
    const limit=req.query.limit
    const getQuery=`SELECT * FROM users`
    db.ecommerceDB.query(getQuery,(error,value)=>{
        if(error) {
            res.status(400).send('error in connecting to db')
        }else{
            const target=value.map(item=>{
                return {username:item.username,firstname:item.firstname,lastname:item.lastname}
            })
            if(limit){
                res.status(200).send(target.slice(0,limit))
            }else{
                res.status(200).send(target)
            }
        }
    })
})
usersRoute.delete('/:id',(req,res)=>{
    const id=req.params.id
    const deleteQuery=`DELETE FROM users WHERE id=${id}`
    if(id){
        db.ecommerceDB.query(deleteQuery,(error,value)=>{
            console.log(value)
            if(error){
                res.status(400).send('error in connecting to db')
            }else if(value.affectedRows>0){
                res.status(201).send(`user by id : ${id} removed`)
            }else{
                res.status(404).send('user not found!')
            }
        })

    }else{
        res.status(404).send('missing required params id')
    }

})
usersRoute.post('/',(req,res)=>{
    const body=req.body
    if(checkBody(body)){
        const generateRandomToken=crypto.randomBytes(32).toString("hex")
        const createUserQuery=`INSERT INTO users VALUES(NULL,"${body.username}","${body.firstname}","${body.lastname}","${generateRandomToken}",${body.password})`
        db.ecommerceDB.query(createUserQuery,(error,value)=>{
            if(error){
                res.status(400).send('error in connecting to db')
            }else{
                res.status(201).send({
                    msg:'user created',
                    userId:value.insertId,
                    token:generateRandomToken
                })
            }

        })
    }else{
        res.status(401).send('missing required body')
    }

})
usersRoute.put('/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    const updatedComp=Object.entries(body).map(item=>{
        if(item[0]==='password'){
            return `${item[0]}=${item[1]}`
        }else if(item[0]==='firstname' || item[0]==='lastname' || item[0]==='username'){
            return `${item[0]}="${item[1]}"`
        }
    }).join(',')

    if(id ){
        const updateUserQuery=`UPDATE users SET ${updatedComp} WHERE id=${id}`
        db.ecommerceDB.query(updateUserQuery,(error,value)=>{
           if(error){
               res.status(401).send('error in db')
           }else{
               res.status(202).send('user edited')
           }
        })

    }else{
        res.status(404).send('missing required params id ')
    }

})





module.exports=usersRoute