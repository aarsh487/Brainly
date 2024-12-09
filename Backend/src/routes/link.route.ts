import express from 'express';
import { authMiddleware } from '../middleware/middleware';
import { generateLink, shareLink } from '../controllers/link.controller';

const router = express.Router();


router.post('/share', authMiddleware, generateLink);
router.get('/:shareLink', shareLink);


export default router;