import DeleteUserService from '@modules/user/services/DeleteUserService';
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

export default usersRouter;
