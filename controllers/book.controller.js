'use strict';

import Book from '../models/book.model.js';
import eventEmitter from '../utils/event_emitter.util.js';

const create = (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        genre: req.body.genre,
        price: req.body.price
    });

    book.save()
        .then((data) => {
            eventEmitter.getInstance().emit('book_created', data);
            res.send(data);
        }
        )
        .catch((err) => {
            res.status(500).send({
                error: err.message || 'Some error occurred while creating the Book.'
            });
        }
        );
}

const findAll = (req, res) => {
    Book.find()
        .then((data) => {
            res.send(data);
        }
        )
        .catch((err) => {
            res.status(500).send({
                error: err.message || 'Some error occurred while retrieving books.'
            });
        }
        );
}

const findOne = (req, res) => {
    const id = req.params.id;
    Book.findOne({ _id: id })
        .then((data) => {
            if (!data) {
                eventEmitter.getInstance().emit('book_not_found', data);
                res.status(404).send({ error: 'Book: Not Found' });
            }
            else {
                eventEmitter.getInstance().emit('book_found', data);
                res.send(data);
            }
        }
        );

}

const update = (req, res) => {
    const id = req.params.id;

    Book.findByIdAndUpdate(id, { ...req.body }, { new: true })
        .then((data) => {
            if (!data) {
                eventEmitter.getInstance().emit('book_not_found', data);
                res.status(404).send({ error: 'Book: Not Found' });
            }
            else {
                eventEmitter.getInstance().emit('book_found', data);
                res.send(data);
            }
        }
        )
}

const remove = (req, res) => {

    const id = req.params.id;
    Book.findOneAndRemove({ _id: id })
        .then((data) => {
            if (!data) {
                eventEmitter.getInstance().emit('book_not_found', data);
                res.status(404).send({ error: 'Book: Not Found' });
            }
            else {
                eventEmitter.getInstance().emit('book_found', data);
                res.send({ message: 'Book was deleted successfully.' });
            }
        }
        )
}

export { create, findAll, findOne, update, remove };