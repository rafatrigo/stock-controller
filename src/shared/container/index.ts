import { container } from 'tsyringe';

import IProductRepository from '@modules/product/repositories/IProductRepository';
import ProductRepository from '@modules/product/infra/typeorm/repositories/ProductRepository';

import ICategoryRepository from '@modules/category/repositories/ICategoryRepository';
import CategoryRepository from '@modules/category/infra/typeorm/repositories/CategoryRepository';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
