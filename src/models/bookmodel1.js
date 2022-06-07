const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    name: {
        type:"String",
    },
    author_id: {
     type:"string",
     required:true   
    },
    prices:Number,
    ratings:Number
      
},  { timestamps: true});


module.exports = mongoose.model('Book1', bookSchema) 