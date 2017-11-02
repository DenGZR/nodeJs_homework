import { Router } from 'express';
import { getUsers } from '../../../controllers/api/users';

const userRouter = Router();

userRouter.get('/', getUsers);

export default userRouter;