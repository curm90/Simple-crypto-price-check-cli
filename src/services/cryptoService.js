import { apiBaseUrl } from '../constants/url.js';

export const fetchTopCryptoCurrencies = async () => {
  try {
    const res = await fetch(`${apiBaseUrl}/assets?limit=5`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const { data = [] } = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
