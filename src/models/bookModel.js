const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        require:true,
    },
    authorName:String,
    price:{
        indianPrice:String,
        europePrice:String,
    },
     year:{
         type:String,
         default:2021
     },
     tags: [String],
    
    isPublished: Boolean,
  
    totalPages:Number,  
    stockAvailable:Boolean,
},  { timestamps: true});


module.exports = mongoose.model('Book', bookSchema) 

//
