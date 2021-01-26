import ICreateProductDTO from '@modules/product/dtos/ICreateProductDTO';
import { getRepository, Repository } from 'typeorm';

import Product from '../entities/Product';

class ProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
    category,
    user,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      quantity,
      minimumQuantity,
      purchaseValue,
      saleValue,
      category_id: category.id,
      user_id: user.id,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  public async list(): Promise<Product[]> {
    const products = await this.ormRepository.find();

    return products;
  }

  public async update(data: Product): Promise<Product> {
    const updatedProduct = await this.ormRepository.save(data);

    return updatedProduct;
  }
}

export default ProductRepository;
