import Book from '../models/book.model.js';

const books = [];

const create = (req, res) => {

    const book = new Book(
        books.length + 1,
        req.body.title,
        req.body.description,
        req.body.author,
        req.body.genre,
        req.body.price,
    );

    books.push(book);
    res.status(201).json({ message: 'Book created successfully', book });
}

const findAll = (req, res) => {
    res.send(books);
}

const findOne = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    book ? res.send(book) : res.status(404).send({ error: 'The book with the given ID was not found' });
}

const update = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
        res.status(404).send({ error: 'The book with the given ID was not found' });
    }
    book.title = req.body.title;
    book.description = req.body.description;
    book.author = req.body.author;
    book.genre = req.body.genre;
    book.price = req.body.price;
    res.send(book);
}

const remove = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
        res.status(404).send({ error: 'The book with the given ID was not found' });
    }
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
}

export { create, findAll, findOne, update, remove };