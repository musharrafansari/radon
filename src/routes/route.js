const express = require('express');
const externalModule = require('./logger')
const demo = require("../logger/logger")
const router =express.Router();

const D = require("../util/helper") 
const M = require("../util/helper")
const binfo =require("../util/helper")




router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    demo.welcome()
    D.printdate()
    M.printmonth()
    binfo.getbatchinfo()
    res.send('My first ever api!')
})

