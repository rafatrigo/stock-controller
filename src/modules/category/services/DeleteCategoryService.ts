import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../repositories/ICategoryRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}

export default DeleteProductService;
