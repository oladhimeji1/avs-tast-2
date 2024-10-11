const Books = require('../model/booksModel');

// Get all books
const allBooks = async (req, res) => {
   
    try {
        
        // Find and return the books
        const books = await Books.find();
        return res.status(200).json({ books });

    } catch (error) {

        // Return error msg
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
    
};

// Post a new book
const uploadBook = async (req, res) => {
  const book = new Books(req.body);

  try {
    book
      .save()
      .then((result) => {
        res.status(200).json({
          message: "New book added succefully",
          type: "SUCCESS",
          book: result,
        });
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

// Edit a book by ID
const updateBook = async (req, res) => {
    const bookId = req.params.id;
    try {
      const updatedBook = await Books.findByIdAndUpdate(bookId, req.body, {
        new: true,
      });
  
      if (!updatedBook) {
        return res.status(404).json({ message: "This book is not found" });
      }
  
      return res.status(200).json({
        type: "SUCCESS",
        message: "Book updated successfully",
        book: updatedBook,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
};

// Delete a book by ID
const deleteBook = async (req, res) => {

    const bookId = req.params.id;
  
    try {
      const deletedBook = await Books.findByIdAndDelete(bookId);
  
      if (!deletedBook) {
        return res.status(404).json({ message: "Book with this id not found" });
      }
  
      return res.status(200).json({ message: "Book deleted successfully", book: deletedBook });

    } catch (error) {

      return res.status(500).json({ message: "Internal server error", error: error.message });

    }
  };

module.exports = {
    allBooks, uploadBook, updateBook, deleteBook
};