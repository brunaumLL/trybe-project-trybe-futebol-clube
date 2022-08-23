import { Router } from 'express';
import UserController from '../controller/user.Controller';

const userRouter = Router();

userRouter.post('/', UserController.login);
// userRouter.get('/validate', UserController.validate);

export default userRouter;
