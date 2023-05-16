import Joi from 'joi';

const authorSchema = Joi.object({
    name: Joi.string().required(),
});

export default authorSchema;