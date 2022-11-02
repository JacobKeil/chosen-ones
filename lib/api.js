import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function getShopifyData(item) {
  try {
    const items = await axios.get(
      `https://chosen1-9510.myshopify.com/admin/api/2022-10/${item}.json`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(
            `${process.env.API_USER}:${process.env.API_PW}`
          )}`,
        },
      }
    );
    return items.data;
  } catch (error) {
    return error;
  }
}
