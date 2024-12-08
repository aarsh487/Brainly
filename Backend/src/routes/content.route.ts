import express from 'express';
import { authMiddleware } from '../middleware/middleware';
import { createContent } from '../controllers/content.controller';

const router = express.Router();

router.post('/content/create', authMiddleware as unknown as express.RequestHandler, createContent as unknown as express.RequestHandler);