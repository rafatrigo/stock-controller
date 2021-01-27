import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';

interface IProductsWithoutUser {
  [key: string]: any;
}

@injectable()
class ListUserProductsService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(id: string): Promise<IProductsWithoutUser[]> {
    const user = await this.userRepository.listUserProducts(id);

    if (!user) {
      throw new AppError('User not found');
    }

    const products = user.product.map(product => {
      const productWithoutUser: IProductsWithoutUser = product;

      delete productWithoutUser.user;

      return productWithoutUser;
    });

    return products;
  }
}

export default ListUserProductsService;
