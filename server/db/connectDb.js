const connectDb=async ()=> {
    const mongoose = require('mongoose');

    try{
        const data = await mongoose.connect('mongodb://127.0.0.1:27017/bookecomdb');
        if (data) console.log('connected to MongoDb')
    }catch(err){
        console.log("Db connection error", err)
    }
 
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectDb