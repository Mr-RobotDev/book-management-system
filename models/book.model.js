import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    genre: String,
    price: Number
}, {
    timestamps: true
});

const Book = mongoose.model('Books', bookSchema);

export default Book;