const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 5000
const { Schema } = mongoose;
const cors = require ('cors')

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Initial Setup')
})


const connectDb=async ()=> {
    try{
        const data = await mongoose.connect('mongodb://127.0.0.1:27017/bookecomdb');
        if (data) console.log('connected to MongoDb')
    }catch(err){
        console.log("Db connection error", err)
    }
 
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
connectDb()

const userSchema = new Schema({
    fullName: {type: String, required: true},
    userName: {type: String},
    password: {type: String},
    confirmPassword: {type: String},
    email: {type: String},
    address: {type: String},
    phoneNumber: {type: Number},
});
const Users = mongoose.model('Users',userSchema)

app.post('/register',async (req,res)=>{
    
   const data = await Users.create(req.body)
   console.log(data)
})

app.listen(port,()=>{
    console.log('Example app listening on port $(port)')
})


