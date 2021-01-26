import { Router } from 'express';

import productsRouter from '@modules/product/infra/http/products.routes';
import categoriesRouter from '@modules/category/infra/http/categories.routes';
import usersRouter from '@modules/user/infra/http/users.routes';
import sessionsRouter from '@modules/user/infra/http/sessions.routes';

import ensureAuthenticate from './middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/sessions', sessionsRouter);

routes.use(ensureAuthenticate);

routes.use('/products', productsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/users', usersRouter);

export default routes;
