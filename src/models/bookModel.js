const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publish: {
        type: ObjectId,
        ref: "Publisher"
    }

}, { timestamps: true });


module.exports = mongoose.model('newBook', newBookSchema)
