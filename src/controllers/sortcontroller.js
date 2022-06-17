// let axios = require("axios")
// const { get } = require("express/lib/response")

// let getSortedCities = async function(req,res) {
//     try {
//         let cities = ["Bengaluru", "Mumbai", "Kolkata", "Chennai", "Londan", "Moscow"]
//         let Array = []

//         for ( i = 0; i < cities.length; i++) {

//             let obj = { city: cities[i] }
//             let option4 = {
//                 method: "get",
//                 url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1f4af29dee22ed77c6eb44d7bf989374`
//             }
            
//             let result= await axios(option4)
//             console.log(result.data.main.temp)

//             obj.temp = result.data.main.temp
//             Array.push(obj)
//         }

//         let sorted = Array.sort(function (a, b) { return a.temp - b.temp })

//         console.log(sorted)
//         res.status(200).send({ status: true, data: sorted })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// module.exports.getSortedCities = getSortedCities