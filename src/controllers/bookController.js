const { count } = require("console")
const res = require("express/lib/response")
const authormodel = require("../models/authormodel")
// const BookModel= require("../models/bookModel")
const bookModel1= require("../models/bookModel1")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

let createauthor= async function (req, res) {
    let data= req.body

    let savedData= await authormodel.create(data)
    res.send({msg: savedData})
}

let createbook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel1.create(data)
    res.send({msg: savedData})
}


    let getBooksByChetanBhagat=async(req,res) =>{
        let data=await authormodel.find({author_name:"Chetan Bhagat"}).select({"author_id":1})
        let dataBook=await bookModel1.find({author_id:data[0].author_id})
        res.send({msg:dataBook})
    
} 

    let authorBook=async(req,res)=>{
        let data=await authormodel.findOneAndUpdate({name:"Two States"},{$set:{prices:100}},{new:true})
        let authorData=await authormodel.find({author_id:data.author_id}).select("author_name")
        let price=data.prices
        res.send({msg:authorData,price})
    }
    
module.exports.createauthor= createauthor
module.exports.createbook= createbook
module.exports.getBooksByChetanBhagat= getBooksByChetanBhagat
module.exports.authorBook= authorBook


// const bookList= async function (req, res) {

//       let allBooks= await BookModel.find( ).select({bookName:1, authorName:1, _id:0})
//         res.send({msg: allBooks})
//      }
// const getBooksInYear= async function (req, res) {
//     let someBooks= await BookModel.find({"year":2001})
//     res.send({msg: someBooks})
// }

// const getRandomBooks= async function (req, res) {
//     let Books= await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
//     res.send({msg: Books})

// }


    // module.exports.createBook= createBook
    // module.exports.bookList= bookList
    // module.exports.getBooksInYear= getBooksInYear
    // module.exports.getRandomBooks= getRandomBooks

    



