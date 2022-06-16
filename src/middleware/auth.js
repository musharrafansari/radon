const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {

  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });


    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "token is invalid" })
    }
  }
  catch (err) {
    console.log("this is the error", err.message)
    res.status(500).send({ msg: err.message })
  }
  next()
}



const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });


    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });
    let userToBeModified = req.params.userId

    let userLoggedIn = decodedToken.userId

    if (userToBeModified != userLoggedIn) {
      return res.status(401).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    }
  }
  catch (err) {
    console.log("this is the error", err.message)
    res.status(500).send({ msg: err.message })
  }


  next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise 