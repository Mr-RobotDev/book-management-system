import express from 'express';
import bodyParser from 'body-parser';
import listEndpoints from 'express-list-endpoints';

import bookRoutes from './routes/book.routes.js';
import eventEmitter from './utils/event_emitter.util.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/books', bookRoutes);

console.log(listEndpoints(app));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

    eventEmitter.init();

    eventEmitter.getInstance().on('book_created', (book) => {
        console.log(`Book created: ${JSON.stringify(book)}`);
    });

    eventEmitter.getInstance().on('book_found', (book) => {
        console.log(`Book found: ${JSON.stringify(book)}`);
    });

    eventEmitter.getInstance().on('book_not_found', (book) => {
        console.log(`Book not found: ${JSON.stringify(book)}`);
    });
});