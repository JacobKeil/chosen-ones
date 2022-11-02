import { writable } from 'svelte/store';

export const products = writable([]);
export const articles = writable([]);

export async function getProducts() {
	const pResponse = await fetch('/products');
	const pData = await pResponse.json();
	products.set(pData.products.slice(0, 4));
}

export async function getArticles() {
	const aResponse = await fetch('/articles');
	const aData = await aResponse.json();
	articles.set(aData.articles);
}