import ListCategoriesService from '@modules/category/services/ListCategoriesService';
import { Router } from 'express';
import { container } from 'tsyringe';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
  const listCategories = container.resolve(ListCategoriesService);

  const categories = await listCategories.execute();

  return response.json(categories);
});

export default categoriesRouter;
