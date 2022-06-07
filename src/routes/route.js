const express = require('express');
const router = express.Router()
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", BookController.createbook)
router.post("/createauthor", BookController.createauthor)
router.get("/getBooksByChetanBhagat", BookController.getBooksByChetanBhagat)
router.get("/authorBook", BookController.authorBook)


// router.post("/createBook", BookController.createBook)
// router.get("/bookList", BookController.bookList)
// router.get("/getBooksInYear", BookController.getBooksInYear)
// router.get("/getRandomBooks", BookController.getRandomBooks)


module.exports = router