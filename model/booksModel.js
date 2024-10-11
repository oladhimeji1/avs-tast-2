const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String },
    author: { type: String },
    createAt: { type: Date, default: Date.now() },
});

// Exporting the model directly
const Books = mongoose.model("book", bookSchema);
module.exports = Books;