const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const checkFieldType = require('./utils/checkFieldType')
const saltRounds = 10
const jwt = require('jsonwebtoken');
const port = 5000
const { Schema } = mongoose;
require('dotenv').config()
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
    userRole: {type: String},
    address: {type: String},
    phoneNumber: {type: Number},
});
const Users = mongoose.model('Users',userSchema)

app.post('/register', async (req,res)=>{
try{
    bcrypt.hash(req.body.password, saltRounds).then( async function(hash){
        req.body.password = hash
       
            const data =  await Users.create(req.body)
            if(data){
                res.json({
                    message: "registration successfull"
                })
            }else{
                res.send('Regsitration Failed')
            }
                });

}catch(err){
    console.log("err"+err)
}
})

app.post('/login',async (req,res)=>{
    const loginKey= checkFieldType(req.body.loginKey)
    //first we need to check if the req.body.phoneNumber exist in the db
    const data = await Users.findOne({[loginKey]: req.body.loginKey})
    if(data){
    bcrypt.compare(req.body.password, data.password, function(err,result){
        if(result){
            res.json({
                message:"login successful"
            })
        }else{
            res.json({
                message: "Invalid Password"
            })
        }
    })
    }else{
        res.json({
            msg: "No data here"
        })
    }
    //if doesnot exist res.json ->msg
    // bcrypt.compare(req.body.password, hash, function(err,result){

    // })
    // jwt.sign({userName: req.body.userName}, process.env.SECRET_KEY, function(err,token){
    //     res.json({
    //         msg: "token generated",
    //         token: token
    //     })
    // });
})

app.listen(port,()=>{
    console.log('Example app listening on port $(port)')
})


