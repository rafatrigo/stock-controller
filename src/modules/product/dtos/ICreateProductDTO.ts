import Category from '@modules/category/infra/typeorm/entities/Category';

export default interface ICreateProductDTO {
  name: string;
  quantity: number;
  minimumQuantity: number;
  purchaseValue: number;
  saleValue: number;
  category: Category;
}
