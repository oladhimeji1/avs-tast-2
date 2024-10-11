const express = require("express");
const { uploadBook, allBooks, updateBook, deleteBook } = require("../controller/books");
const router = express.Router();

//user route
router.post("/upload-book", uploadBook);

router.get("/books", allBooks);

router.put("/update-book/:id", updateBook);

router.delete("/books/:id", deleteBook);

module.exports = router;
