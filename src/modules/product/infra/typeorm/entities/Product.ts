import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from '@modules/category/infra/typeorm/entities/Category';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('integer')
  quantity: number;

  @Column('integer')
  minimumQuantity: number;

  @Column('decimal')
  purchaseValue: number;

  @Column('decimal')
  saleValue: number;

  @ManyToOne(() => Category, category => category.product, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

export default Product;
