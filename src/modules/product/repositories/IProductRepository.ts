import Product from '@modules/product/infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  findByName(name: string): Promise<Product | undefined>;
  delete(id: string): Promise<void>;
  list(): Promise<Product[]>;
  update(data: Product): Promise<Product>;
}
