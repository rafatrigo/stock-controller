import CreateProductServer from '@modules/product/services/CreateProductService';
import { Router } from 'express';
import { container } from 'tsyringe';

const productsRouter = Router();

// create product
productsRouter.post('/', async (request, response) => {
  const {
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
    category,
  } = request.body;

  const createProduct = container.resolve(CreateProductServer);

  const product = await createProduct.execute({
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
    category,
  });

  return response.json(product);
});

export default productsRouter;
