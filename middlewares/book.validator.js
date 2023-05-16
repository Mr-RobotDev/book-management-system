import Joi from 'joi';

const bookSchema = Joi.object({
    title: Joi.string().required(),
});

export default bookSchema;