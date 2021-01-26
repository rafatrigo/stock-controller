import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(user: User): Promise<User> {
    const exist = await this.userRepository.findById(user.id);

    if (!exist) {
      throw new AppError('User not found');
    }

    const updatedUser = await this.userRepository.update(user);

    return updatedUser;
  }
}

export default UpdateUserService;
