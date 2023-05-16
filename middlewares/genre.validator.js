import Joi from 'joi';

const genreSchema = Joi.object({
    name: Joi.string().required(),
});

export default genreSchema;