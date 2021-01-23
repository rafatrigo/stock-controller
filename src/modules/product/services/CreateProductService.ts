import { inject, injectable, container } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import ICategoryRepository from '@modules/category/repositories/ICategoryRepository';
import CreateCategoryService from '@modules/category/services/CreateCategoryService';
import IProductRepository from '../repositories/IProductRepository';

import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  quantity: number;
  minimumQuantity: number;
  purchaseValue: number;
  saleValue: number;
  category: string;
}

@injectable()
class CreateProductServer {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,

    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute({
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
    category,
  }: IRequest): Promise<Product> {
    const checkProductExists = await this.productRepository.findByName(name);

    if (checkProductExists) {
      throw new AppError('Product alredy exists');
    }

    let checkCategory = await this.categoryRepository.findOne(category);

    if (!checkCategory) {
      const createCategory = container.resolve(CreateCategoryService);

      checkCategory = await createCategory.execute(category);
    }

    const newProduct = {
      name,
      quantity,
      minimumQuantity,
      purchaseValue,
      saleValue,
      category: checkCategory,
    };

    const product = await this.productRepository.create(newProduct);

    return product;
  }
}

export default CreateProductServer;
