const mysql=require('mysql')
const ecommerceDB=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'ecommerce'
})

const init = () => {
  ecommerceDB.connect((err)=>{
      if(err){
          console.log('error in connecting to database')
          return false
      }else{
          console.log('database connected')
      }
  })
}
module.exports={
    init,ecommerceDB
}