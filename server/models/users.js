const mongoose = require('mongoose');
const { Schema } = mongoose;

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

module.exports = Users