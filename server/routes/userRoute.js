import { Router } from 'express';
import UserController from '../controllers/userController';
import signUpValidator from '../middleware/validations/signUpValidator';

const router = Router();
router.post('/auth/signup', signUpValidator, UserController.registerUser);

export default router;
