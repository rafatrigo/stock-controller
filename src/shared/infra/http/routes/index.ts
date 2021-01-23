import { Router } from 'express';

import productsRouter from '@modules/product/infra/http/products.routes';
import categoriesRouter from '@modules/category/infra/http/categories.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/categories', categoriesRouter);

export default routes;
