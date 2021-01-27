import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  // still need to improve the logic (require password and thigs like that)
  public async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    await this.userRepository.delete(id);
  }
}

export default DeleteUserService;
