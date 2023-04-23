import {
  SECRET_SHOPIFY_API_PW,
  SECRET_SHOPIFY_API_USER,
  SECRET_SHOPIFY_API_ENDPOINT
} from '$env/static/private';

export const GET = async (event) => {
  const query = event.url.searchParams.get('items');
  const response = await fetch(`${SECRET_SHOPIFY_API_ENDPOINT}/admin/api/2022-10/${query}.json`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${SECRET_SHOPIFY_API_USER}:${SECRET_SHOPIFY_API_PW}`)}`
    })
  });
  const items = await response.json();
  return new Response(
    JSON.stringify({
      items
    })
  );
};
