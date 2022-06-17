// let axios = require("axios")

// let getDistrictById = async function(req,res){
   
//     try{
//     let id = req.query.district_id
//     let date1 = req.query.date
//     let option1 = {
//         method : "get",
//         url :`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date1}`
//     }
//     let result = await axios(option1)
//     console.log(result)
//     let data = result.data
//     res.status(200).send({ msg: data, status: true})
// }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }

// }
// let getStates = async function (req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }



// let getDistricts = async function (req, res) {
//     try {
//         let id = req.params.stateId
//         let options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
//         }
//         let result = await axios(options);
//         console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }



// let getByPin = async function (req, res) {
//     try {
//         let pin = req.query.pincode
//         let date = req.query.date
//         console.log(`query params are: ${pin} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
//         }
//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getOtp = async function (req, res) {
//     try {
//         let blahhh = req.body
        
//         console.log(`body is : ${blahhh} `)
//         var options = {
//             method: "post",
//             url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
//             data: blahhh
//         }

//         let result = await axios(options)
//         console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     }
    // catch (err) {
    //     console.log(err)
    //     res.status(500).send({ msg: err.message })
    // }
// }



//     let getWeather = async function(req,res){
   
//     try{
//     let city = req.query.q
//     let appId = req.query.appid
//     let option2 = {
//         method : "get",
        // url :`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
//     }
//     let result = await axios(option2)
//     console.log(result)
//     let data = result.data
//     res.status(200).send({msg:result.data})
// }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }

// }


// let getTemp = async function(req,res){
   
//     try{
//     let city = req.query.q
//     let appId = req.query.appid
//     let option3 = {
//         method : "get",
//         url :`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
//     }
//     let result = await axios(option3)
//     console.log(result)
//     let data = result.data
//     res.status(200).send({city:result.data.name, Temp:result.data.main.Temp})
// }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({msg: err.message })
//     }

// }

// module.exports.getStates = getStates
// module.exports.getDistricts = getDistricts
// module.exports.getByPin = getByPin
// module.exports.getOtp = getOtp
module.exports.getDistrictById=getDistrictById
// module.exports.getWeather = getWeather
// module.exports.getTemp=getTemp