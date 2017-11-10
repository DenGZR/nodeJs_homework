import { Router } from 'express';
import verifyToken from '../../middleware/verifyToken';
import passport from '../../middleware/passportLocalStrategy';
import products from './products';
import users from './users';

const apiRouter = Router();
// task 3
// apiRouter.use('/products', verifyToken, products);
// apiRouter.use('/users', verifyToken, users);

// task 5
apiRouter.use('/products', passport.authenticate('bearer', { session: false }), products);
apiRouter.use('/users', passport.authenticate('bearer', { session: false }), users);

export default apiRouter;