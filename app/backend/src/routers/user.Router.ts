import { Router } from 'express';
import TokenMiddleware from '../middleware/tokenMiddleware';
import UserController from '../controller/user.Controller';

const userRouter = Router();

userRouter.post('/', UserController.login);
userRouter.get('/validate', TokenMiddleware.validate);

export default userRouter;
