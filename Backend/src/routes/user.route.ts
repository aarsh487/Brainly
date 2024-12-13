import express, { Router } from 'express';
import { getUser, userLogin, userLogout, userSignup } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/middleware';

const router: Router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/', authMiddleware, getUser);
router.post('/logout', userLogout);



export default router;