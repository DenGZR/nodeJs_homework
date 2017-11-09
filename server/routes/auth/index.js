import { Router } from 'express';
import getLogin from '../../controllers/auth';

const authRouter = Router();

authRouter.post('/', getLogin);

export default authRouter;