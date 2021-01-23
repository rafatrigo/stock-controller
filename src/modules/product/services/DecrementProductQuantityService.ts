import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IProductRepository from '../repositories/IProductRepository';

import Product from '../infra/typeorm/entities/Product';

@injectable()
class DecrementProductQuantityService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    if (product.quantity <= 0) {
      throw new AppError(
        'Impossible to decrease the quantity of the product below zero',
      );
    }

    product.quantity -= 1;

    await this.productRepository.update(product);

    return product;
  }
}

export default DecrementProductQuantityService;
