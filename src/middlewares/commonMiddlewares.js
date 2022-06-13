// const orderModel =require("..models/orderModel")
// const userModel =require("..models/userModel")
// const productModel =require("..models/productModel")


const mid1 = function(req,res,next){
    let headdata =req.headers.isFreeAppUser
    if(headdata){
        console.log("isFreeAppUser is present")
        next()
    } else{res.send({msg:"the request is missing a mandatory header"})}
       
    
}


module.exports.mid1= mid1


// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }


// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
