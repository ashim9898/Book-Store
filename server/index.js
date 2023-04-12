const express = require('express')
const app = express()
const saltRounds = 10
const jwt = require('jsonwebtoken');
const port = 5000
require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const cors = require ('cors')
const GenerateJwt = require('./utils/generateJwt')

const checkFieldType = require('./utils/checkFieldType')
const connectDb = require('./db/connectDb')
const Users = require('./models/users');
const Orders = require('./models/orders');

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Initial Setup')
})



connectDb()

Users()

Orders()

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

app.post('/orders',async(req,res)=>{
    //const newOrders = await Orders.create(req.body)
    try{
        const newOrders =  new Orders(req.body)
        await newOrders.save().then(data=>{
            if(data){
                res.status(200).json({message: "Your order is on the way"})
            }
        })
       
        
    }catch(err){
        console.log("err"+err)
        res.status(500).json({message: err})

    }
})

app.get('/orders',async(req,res)=>{
    //const newOrders = await Orders.create(req.body)
    try{
        const orders =  await Orders.find()
        if(orders){
            res.status(200).json({orders})
        }
       
        
    }catch(err){
        console.log("err"+err)
        res.status(500).json({message: err})
    }
  
})

app.put("/order/:id",async (req,res)=>{
    const result=await Orders.updateOne(
        {_id:req.params.id},
        {$set:req.body}
        )
        res.json({
            result
           })
})

app.get('/orders/:userId',async(req,res)=>{
    //const newOrders = await Orders.create(req.body)
    try{
        const ordersList =  await Orders.find({userId: req.params.userId})
        if(ordersList){
            res.json({
                ordersList
            })
        }
            
        
       
        
    }catch(err){
        res.status(500).json({message: err})

    }
})

app.get("/order/:id",async(req,res)=>{
    const result = await Orders.findOne({_id:req.params.id})
    if(result){
        res.json({
            result
        })
    }else{
        res.send({"result":"No result found"})
    }
})


app.post('/login',async (req,res)=>{
    try{
        console.log(req.body.loginKey)
        const fieldKey= checkFieldType(req.body.loginKey)
        const token = GenerateJwt(fieldKey, req.body.loginKey)
        //first we need to check if the req.body.phoneNumber exist in the db
        const data = await Users.findOne({[fieldKey]: req.body.loginKey})
        if(data){
            
        bcrypt.compare(req.body.password, data.password, function(err,result){
            if(result){
                res.json({
                    message:"login successful",
                    token,
                    id: data._id
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
    }catch(err){
        console.log(err)
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


