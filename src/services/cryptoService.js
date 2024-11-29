import chalk from 'chalk';
import { apiBaseUrl } from '../constants/url.js';

export const fetchTopCryptoCurrencies = async (cmd) => {
  const { coin } = cmd;

  try {
    const res = await fetch(`${apiBaseUrl}/assets?ids=${coin}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const { data = [] } = await res.json();

    return data;
  } catch (error) {
    console.error(chalk.red(`Error: ${error.message}`));
    return [];
  }
};
