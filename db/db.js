import mongodb from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/books';

const database = {
    connectDatabase: () => {
        mongodb.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Successfully connected to the database.');
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    }
};

export default database;