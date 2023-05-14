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
const usersRoute=require('./routes/users')
const productsRoute=require('./routes/products')
const loginRoute=require('./routes/login')
const meRoute=require('./routes/me')
app.use('/api/posts',postsRoute)
app.use('/api/users',usersRoute)
app.use('/api/products',productsRoute)
app.use('/api/login',loginRoute)
app.use('/api/me',meRoute)

app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`))
