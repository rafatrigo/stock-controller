import Category from '@modules/category/infra/typeorm/entities/Category';
import User from '@modules/user/infra/typeorm/entities/User';

export default interface ICreateProductDTO {
  name: string;
  quantity: number;
  minimumQuantity: number;
  purchaseValue: number;
  saleValue: number;
  category: Category;
  user: User;
}
