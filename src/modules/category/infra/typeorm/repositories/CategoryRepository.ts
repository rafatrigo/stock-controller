import { getRepository, Repository } from 'typeorm';
import AppError from '@shared/errors/AppError';

import Category from '../entities/Category';

class CategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findOne(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return category;
  }

  public async create(name: string): Promise<Category> {
    const category = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(category);

    return category;
  }

  public async delete(id: string): Promise<void> {
    const category = await this.ormRepository.findOne(id);

    if (!category) {
      throw new AppError('This category does not exists');
    }

    await this.ormRepository.delete(id);
  }
}

export default CategoryRepository;
