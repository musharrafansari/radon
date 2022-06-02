const express = require('express')
// const extmodule = require('../util/helper')
const lodash =require('lodash')
// const newword = require("../validator/formatter")

const router = express.Router()

router.get('/hello', function (req, res){
     
    const arr = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    const b= lodash.chunk(arr,4)
    console.log(b)

    const arr0 = [1,3,5,7,9,11,13,15,17,19]
    const n = lodash.tail(arr0)
    console.log(n)

    let arr1=[1,2]
    let arr2=[2,3]
    let arr3=[4,5]
    let arr4=[6,7]
    let arr5=[7,8,9]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

    const pair=[['horror','the shining'],['drama','titanic'],['thriller','shutter']]
    const p=lodash.fromPairs(pair)
    console.log(p)

    // extmodule.printDate()
    // extmodule.printmonth()
    // extmodule.getbatchinfo()
    // newword.word()
    // newword.some()
    // newword.demo()
     

    
    res.send('App is running')
 
});



module.exports = router;


