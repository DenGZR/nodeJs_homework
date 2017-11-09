import { Router } from 'express';
import verifyToken from '../../middleware/verifyToken'
import products from './products';
import users from './users';

const apiRouter = Router();

apiRouter.use('/products', verifyToken, products);
apiRouter.use('/users', verifyToken, users); 

export default apiRouter;