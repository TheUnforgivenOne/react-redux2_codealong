import express from "express";
import ProductsController from "../controllers/productsController.js";

const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  const products = await ProductsController.getAll();

  res.json({ status: 'ok', data: products });
});

productsRouter.post('/add', async (req, res) => {
  const newProduct = req.body;
  await ProductsController.addProduct(newProduct);

  res.json({ status: 'ok' });
});

productsRouter.post('/buy', async (req, res) => {
  const cart = req.body;
  const products = await ProductsController.buyProducts(cart.products);

  res.json({ status: 'ok', data: products });
});

export { productsRouter };
