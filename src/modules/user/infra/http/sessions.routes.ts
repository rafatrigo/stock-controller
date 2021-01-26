import { container } from 'tsyringe';
import { Router } from 'express';
import AuthenticateUserService from '@modules/user/services/AuthenticateUserService';
import CreateUserService from '@modules/user/services/CreateUserService';

const sessionsRouter = Router();

// authenticate user
sessionsRouter.post('/logIn', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const user = await authenticateUser.execute({ email, password });

  return response.json(user);
});

// register user
sessionsRouter.post('/signUp', async (request, response) => {
  const user = request.body;

  const createUser = container.resolve(CreateUserService);

  const { id, name, email } = await createUser.execute(user);

  return response.json({ id, name, email });
});

export default sessionsRouter;
