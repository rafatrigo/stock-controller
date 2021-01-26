import CreateProductServer from '@modules/product/services/CreateProductService';
import DecrementProductQuantityService from '@modules/product/services/DecrementProductQuantityService';
import DeleteProductService from '@modules/product/services/DeleteProductService';
import IncrementProductQuantityService from '@modules/product/services/IncrementProductQuantityService';
import ListProductsServer from '@modules/product/services/ListProductsServer';
import UpdateProductService from '@modules/product/services/UpdateProductService';
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

  const user_id = request.user.id;

  const createProduct = container.resolve(CreateProductServer);

  const product = await createProduct.execute({
    name,
    quantity,
    minimumQuantity,
    purchaseValue,
    saleValue,
    user_id,
    category,
  });

  return response.status(201).json(product);
});

// delete products
productsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteProduct = container.resolve(DeleteProductService);

  await deleteProduct.execute(id);

  return response.status(204).send();
});

// list products
productsRouter.get('/', async (request, response) => {
  const listProducts = container.resolve(ListProductsServer);

  const products = await listProducts.execute();

  return response.json(products);
});

// modify product
productsRouter.patch('/', async (request, response) => {
  const newProduct = request.body;

  const update = container.resolve(UpdateProductService);

  const updatedProduct = await update.execute(newProduct);

  return response.json(updatedProduct);
});

// increment quantity
productsRouter.put('/:id/increment', async (request, response) => {
  const { id } = request.params;

  const increment = container.resolve(IncrementProductQuantityService);

  const productIncremented = await increment.execute(id);

  return response.json(productIncremented);
});

// decrement quantity
productsRouter.put('/:id/decrement', async (request, response) => {
  const { id } = request.params;

  const decrement = container.resolve(DecrementProductQuantityService);

  const productDecremented = await decrement.execute(id);

  return response.json(productDecremented);
});

export default productsRouter;
