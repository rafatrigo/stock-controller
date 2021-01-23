import { inject, injectable } from 'tsyringe';
import IProductRepository from '../repositories/IProductRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}

export default DeleteProductService;
