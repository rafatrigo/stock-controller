import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import IUserRepository from '../repositories/IUserRepository';
import User from '../infra/typeorm/entities/User';
import auth from '../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination');
    }

    const { secret, expiredIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiredIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
