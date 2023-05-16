import Joi from 'joi';

const bookSchema = Joi.object({
    title: Joi.string().required().messages({
        'string.base': 'Title should be a type of text',
        'string.empty': 'Title cannot be an empty field',
        'any.required': 'Title is a required field',
    }),
    description: Joi.string().min(10).max(200).messages({
        'string.base': 'Description should be a type of text',
        'string.empty': 'Description cannot be an empty field',
        'string.min': 'Description should have a minimum length of {#limit}',
        'string.max': 'Description should have a maximum length of {#limit}',
        'any.required': 'Description is a required field',
    }),
    author: Joi.string().required().messages({
        'string.base': 'Author should be a type of text',
        'string.empty': 'Author cannot be an empty field',
        'any.required': 'Author is a required field',
    }),
    genre: Joi.string().required().messages({
        'string.base': 'Genre should be a type of text',
        'string.empty': 'Genre cannot be an empty field',
        'any.required': 'Genre is a required field',
    }),
    price: Joi.number().required().messages({
        'number.base': 'Price should be a type of number',
        'number.empty': 'Price cannot be an empty field',
        'any.required': 'Price is a required field',
    }),
});

export default bookSchema;