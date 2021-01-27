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

  // still need to improve the logic (require password and thigs like that)
  public async execute(user: User): Promise<User> {
    const exist = await this.userRepository.findById(user.id);

    if (!exist) {
      throw new AppError('User not found');
    }

    const updatedUser = await this.userRepository.update(user);

    const updatedUserWithoutPassword = updatedUser;

    updatedUserWithoutPassword.password = '***';

    return updatedUserWithoutPassword;
  }
}

export default UpdateUserService;
