const express = require('express')
const app = express()
const port = 5000
const cors = require ('cors')

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Initial Setup')
})

app.post('/register',(req,res)=>{
console.log(req.body)
})

app.listen(port,()=>{
    console.log('Example app listening on port $(port)')
})