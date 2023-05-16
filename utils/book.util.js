import bookSchema from '../validators/book.validator.js';

const bookValidator = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
}

export default bookValidator;