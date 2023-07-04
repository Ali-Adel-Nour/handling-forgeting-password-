const express = require('express')

const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')

let user = {
  id:"sgaasa",
  email:"alice@gmail.com",
  password:"dshaaaahaaha;'agasaaaagaga"
}

//because not a production app just for learning i will not make a env or db

const JWT_SECRET = 'some super secret...'

app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.get('/forget-password',(req,res,next)=>{
res.render('forgot-password')
})

app.post('/forget-password',(req,res,next)=>{
const {email} = req.body

//make sure this the user exist in database

if(email !== user.email){
  res.send('User not registered')
  return
}

const secret = JWT_SECRET = user.password

const payload = {
  email:user.email,
  id:user.id
}

const token = jwt.sign(payload, secret,{expiresIn:'15m'})
const link = `http://localhost:3000/reset-password/${user.id}/${token}`
console.log(link)
res.send('Passsword rest link has been sent to your email')
})

app.get('/reset-password/',(req,res,next)=>{

})
app.post('/reset-password',(req,res,next)=>{

})


app.listen(3000,()=>{
  console.log("server running")})