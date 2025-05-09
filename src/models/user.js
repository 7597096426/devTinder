const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    number:Number,
    age:Number,
    password:String
})



module.exports = mongoose.model('User',userSchema);