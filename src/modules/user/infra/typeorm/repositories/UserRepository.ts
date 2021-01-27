import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async update(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmail(user_email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email: user_email },
    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async listUserProducts(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id, {
      relations: ['product'],
    });

    return user;
  }
}

export default UserRepository;
