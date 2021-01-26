import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from '@modules/category/infra/typeorm/entities/Category';
import User from '@modules/user/infra/typeorm/entities/User';

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

  @Column()
  category_id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => Category, category => category.product, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => User, user => user.product, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Product;
