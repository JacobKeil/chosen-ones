import { writable } from 'svelte/store';

export const products = writable([]);
export const articles = writable([]);

export async function getProducts() {
  const pResponse = await fetch('/api?items=products');
  const pData = await pResponse.json();
  products.set(pData.items.products);
}

export async function getArticles() {
  const aResponse = await fetch('/api?items=articles');
  const aData = await aResponse.json();
  articles.set(aData.items.articles);
}
