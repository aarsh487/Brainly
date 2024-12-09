import express, { Router } from 'express';
import { userLogin, userSignup } from '../controllers/user.controller';

const router: Router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);


export default router;