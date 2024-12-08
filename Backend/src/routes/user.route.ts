import express from 'express';
import { userLogin, userSignup } from '../controllers/user.controller';

const router = express.Router();


router.post('/signup', userSignup as unknown as express.RequestHandler);
router.post('/login', userLogin as unknown as express.RequestHandler)


export default router;