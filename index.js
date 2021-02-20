const express = require('express')
const axios=require('axios')
const morgan =require('morgan')
const bodyParser=require('body-parser')

const app=express()
app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('',(req,res)=>res.send({status:"OK"}))

app.listen(3000,()=>console.log('App is listening on 3000'))