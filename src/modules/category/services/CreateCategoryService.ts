import { inject, injectable } from 'tsyringe';

import ICategoryRepository from '../repositories/ICategoryRepository';

import Category from '../infra/typeorm/entities/Category';

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(name: string): Promise<Category> {
    const checkCategoryExists = await this.categoryRepository.findOne(name);

    if (checkCategoryExists) {
      return checkCategoryExists;
    }

    const category = await this.categoryRepository.create(name);

    return category;
  }
}

export default CreateCategoryService;
