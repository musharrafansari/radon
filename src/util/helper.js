
const printDate = function printDate(){
    let x= new date()
    let Date = x.getDate()
    console.log(Date)

    
}
const printmonth = function(){
    let x = new date()
    let Month = x.getMonth()
    console.log(Month)
}

const getbatchinfo = function(){
    console.log("radon, W3 D3, the topic for today is node.js module system.")
}

module.experts.printDate=printDate
module.exports.printmonth=printmonth
module.exports.getbatchinfo=getbatchinfo