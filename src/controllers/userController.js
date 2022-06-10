const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }

    // const Date = function(req,res,next){

    //     var today = new Date();
    //     var dd = String(today.getDate()).padStart(2, '0');
    //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     var yyyy = today.getFullYear();
        
    //     today = mm + '/' + dd + '/' + yyyy;
    //     document.write(today);
    
    // let ip=req.ip
    // console.log(ip)
    // let url=req.originalurl

    // console.log(url)

    // next()
        
    // }















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode