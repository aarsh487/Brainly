import express from 'express';
import { userSignup } from '../controllers/user.controller';

const router = express.Router();


router.post('/api/user/signup', userSignup);


export default router;