import Category from '../infra/typeorm/entities/Category';

export default interface ICategoryRepository {
  create(data: string): Promise<Category>;
  findOne(name: string | Category): Promise<Category | undefined>;
  delete(id: string): Promise<void>;
  list(): Promise<Category[]>;
}
