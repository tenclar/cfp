import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from '../services/CreateUserService';
import User from '../models/User';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();
  return res.json(users);
});

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({
    name,
    email,
    password,
  });
  delete user.password;
  return response.json(user);
});

export default userRouter;
