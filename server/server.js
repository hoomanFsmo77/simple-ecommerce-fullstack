require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
app.use(bodyParser.json())
app.use(cors())

///// database
const database=require('./database')
database.init()
///// routes
const postsRoute=require('./routes/posts')
app.use('/api/posts',postsRoute)

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))
