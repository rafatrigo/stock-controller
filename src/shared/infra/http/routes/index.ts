import { Router } from 'express';

import productsRouter from '@modules/product/infra/http/products.routes';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
