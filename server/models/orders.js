const mongoose = require("mongoose")
const { Schema } = mongoose;

const orderSchema = new Schema({
    fullName: {type: String, required: true},
    productName: {type: String},
    address: {type: String},
    phoneNumber: {type:Number},
    date: {type: Date},
    userId: {type: String},

})
const Orders = mongoose.model('Orders',orderSchema)

module.exports = Orders