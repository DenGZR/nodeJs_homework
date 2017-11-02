import { Router } from 'express';
import { getProducts } from '../../../controllers/api/products';

const productRouter = Router();

productRouter.get('/', getProducts);

export default productRouter;