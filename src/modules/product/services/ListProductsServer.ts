import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';

@injectable()
class ListProductsServer {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    const products = await this.productRepository.list();

    products.map(product => {
      const productWithoutUser = product;

      delete productWithoutUser.user;

      return productWithoutUser;
    });

    return products;
  }
}

export default ListProductsServer;
