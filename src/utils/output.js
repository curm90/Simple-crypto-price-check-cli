import chalk from 'chalk';

export function priceChangeColor(change) {
  return parseFloat(change) < 0 ? chalk.red : chalk.green;
}

export function formatOutput(data) {
  const { rank, symbol, name, priceUsd, changePercent24Hr } = data || {};

  const formattedSymbol = chalk.yellow(symbol);
  const formattedPrice = chalk.green('$', parseFloat(priceUsd).toFixed(2));
  const formattedChange = priceChangeColor(changePercent24Hr)(parseFloat(changePercent24Hr).toFixed(2) + '%');

  return `Coin: ${formattedSymbol} - (${name}) | Price: ${formattedPrice} | Rank: ${chalk.blue(
    rank,
  )} | Change (24Hr): ${formattedChange}`;
}
