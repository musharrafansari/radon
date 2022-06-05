const bookModel= require("../models/bookModel")

const createnewbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbookData= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}

module.exports.createnewbook= createnewbook
module.exports.getbookData= getbookData