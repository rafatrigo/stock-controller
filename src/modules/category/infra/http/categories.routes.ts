import ListCategoriesService from '@modules/category/services/ListCategoriesService';
import { Router } from 'express';
import { container } from 'tsyringe';
import DeleteCategoryService from '../../services/DeleteCategoryService';

const categoriesRouter = Router();

// list categories
categoriesRouter.get('/', async (request, response) => {
  const listCategories = container.resolve(ListCategoriesService);

  const categories = await listCategories.execute();

  return response.json(categories);
});

categoriesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteCategory = container.resolve(DeleteCategoryService);

  await deleteCategory.execute(id);

  return response.status(204).send();
});

export default categoriesRouter;
