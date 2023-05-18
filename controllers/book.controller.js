'use strict';

import Book from '../models/book.model.js';
import eventEmitter from '../utils/event_emitter.util.js';

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

    eventEmitter.getInstance().emit('book_created', book);
    res.status(201).json({ message: 'Book created successfully', book });
}

const findAll = (req, res) => {
    res.send(books);
}

const findOne = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (book) {
        eventEmitter.getInstance().emit('book_found', book);
        res.send(book);
    }
    else {
        res.status(404).send({ error: 'Book: Not Found' });
    }
}

const update = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
        eventEmitter.getInstance().emit('book_not_found', book);
        res.status(404).send({ error: 'Book: Not Found' });
    }
    else {
        eventEmitter.getInstance().emit('book_found', book);
        book.title = req.body.title;
        book.description = req.body.description;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.price = req.body.price;
        res.send(book);
    }
}

const remove = (req, res) => {
    const book = books.find((book) => book.id === parseInt(req.params.id));
    if (!book) {
        eventEmitter.getInstance().emit('book_not_found', book);
        res.status(404).send({ error: 'Book: Not Found' });
    }
    else {
        eventEmitter.getInstance().emit('book_found', book);
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send(book);
    }
}

export { create, findAll, findOne, update, remove };