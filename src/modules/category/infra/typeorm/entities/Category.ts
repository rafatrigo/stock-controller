import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import Product from '@modules/product/infra/typeorm/entities/Product';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Product, product => product.category)
  product: Product;
}

export default Category;
