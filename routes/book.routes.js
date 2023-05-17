import express from 'express';

import { create, findAll, findOne, update, remove } from '../controllers/book.controller.js';
import bookValidator from '../utils/book.util.js';

const router = express.Router();

router.get('/', findAll);
router.post('/', bookValidator, create);
router.get('/:id', findOne);
router.put('/:id', bookValidator, update);
router.delete('/:id', remove);

export default router;