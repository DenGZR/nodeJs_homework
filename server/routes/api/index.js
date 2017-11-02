import { Router } from 'express';
import products from './products';
import users from './users';

const apiRouter = Router();

apiRouter.use('/products', products);
apiRouter.use('/users', users);

export default apiRouter;