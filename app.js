const express = require('express')

const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.get('/forget-password',(req,res,next)=>{

})

app.post('/forget-password',(req,res,next)=>{

})

app.get('/reset-password',(req,res,next)=>{

})
app.post('/reset-password',(req,res,next)=>{

})


app.listen(3000,()=>{
  console.log("server running")})