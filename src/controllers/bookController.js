const { required } = require("nodemon/lib/config")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await BookModel.create(book)

    let authorId=book.author_id
    let publishId=book.publisher_id
//..................(a)...................//
    if(!authorId){
        res.send({msg: "this detail is required"})
    }
// .................(c)....................//
    if(!publishId){
        res.send({msg: "the publisher is not present"})
    }
    
    let num= await authorModel.findOne({_id:authorId}).select({_id:1})
    let newid=num_id.toString()
    if(authorId!==newid)
    res.send({msg:"the author is not present"})
    res.send({data: bookCreated})
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate("author").populate("publisher")
    res.send({data: specificBook})

}







module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
