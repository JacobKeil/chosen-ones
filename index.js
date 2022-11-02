import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { Shopify } from './lib/enums.js';
import { getShopifyData } from './lib/api.js';
import { handler } from './client/build/handler.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: '*',
  })
);

app.get('/articles', async (req, res) => {
  const articles = await getShopifyData(Shopify.ARTICLES);
  res.json(articles);
});

app.get('/products', async (req, res) => {
  const products = await getShopifyData(Shopify.PRODUCTS);
  res.json(products);
});

app.use(handler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
