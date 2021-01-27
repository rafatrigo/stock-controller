import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({
    id,
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
  }: Product): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    product.name = name;
    product.quantity = quantity;
    product.minimumQuantity = minimumQuantity;
    product.purchaseValue = purchaseValue;
    product.saleValue = saleValue;

    const updatedProduct = await this.productRepository.update(product);

    delete product.user;

    return updatedProduct;
  }
}

export default UpdateProductService;
