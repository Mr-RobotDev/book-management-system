import express from 'express';
import bodyParser from 'body-parser';
import listEndpoints from 'express-list-endpoints';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/books', );
app.use('/api/v1/authors', );
app.use('/api/v1/genres', );

console.log(listEndpoints(app));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});