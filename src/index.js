const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://musharrafansari:XY5t9CKinqT75evR@cluster0.xsylin5.mongodb.net/musharrafansaridb", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );


    
    
  const musharraf= function(req,res,next){

                var currentdate = new Date(); 
                var datetime = "Last Sync: " + currentdate.getDate() + "/"
                                + (currentdate.getMonth()+1)  + "/" 
                                + currentdate.getFullYear() + " @ "  
                                + currentdate.getHours() + ":"  
                                + currentdate.getMinutes() + ":" 
                                + currentdate.getSeconds();
     
    console.log(datetime)
   
    let ip=req.ip
    console.log(ip)
    let url=req.originalUrl
    console.log(url)
    

    // console.log(`${datetime} ${ip} ${url}`)

    

    next()
        
    }

    app.use(musharraf)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
