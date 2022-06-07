const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const { stringify } = require('nodemon/lib/utils');

const authorSchema = new mongoose.Schema( {
    author_id:{
        type:"string",
        unique:true,
        required:true
    },
    author_name:"String",
    age:Number,
    address:"string",
   

} ,{timestamps:true})

module.exports = mongoose.model('Author', authorSchema) 
