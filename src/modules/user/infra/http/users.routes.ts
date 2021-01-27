import DeleteUserService from '@modules/user/services/DeleteUserService';
import ListUserProductsService from '@modules/user/services/ListUserProductsService';
import UpdateUserService from '@modules/user/services/UpdateUserService';
import { Router } from 'express';

import { container } from 'tsyringe';

const usersRouter = Router();

// delete user
usersRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteUser = container.resolve(DeleteUserService);

  await deleteUser.execute(id);

  return response.status(204).send();
});

// update user
usersRouter.patch('/:id', async (request, response) => {
  const user = request.body;

  const update = container.resolve(UpdateUserService);

  const updatedUser = await update.execute(user);

  return response.json(updatedUser);
});

// list user products
usersRouter.get('/products', async (request, response) => {
  const user_id = request.user.id;

  const listProducts = container.resolve(ListUserProductsService);

  const products = await listProducts.execute(user_id);

  return response.json(products);
});

export default usersRouter;
