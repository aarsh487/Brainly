import express from 'express';
import { authMiddleware } from '../middleware/middleware';
import { createContent, deleteContent, getContent } from '../controllers/content.controller';

const router = express.Router();

router.post('/create', authMiddleware, createContent );
router.get('/', authMiddleware, getContent );
router.delete('/', authMiddleware, deleteContent );

export default router;