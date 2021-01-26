import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IProductRepository from '../repositories/IProductRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const product = this.productRepository.findById(id);

    if (!product) {
      throw new AppError('This product does not exist');
    }

    await this.productRepository.delete(id);
  }
}

export default DeleteProductService;
