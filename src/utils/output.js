export function formatOutput(data) {
  const { rank, symbol, name, priceUsd, changePercent24Hr } = data || {};

  return `Coin: ${symbol} - (${name}) | Price: $${parseFloat(priceUsd).toFixed(
    2,
  )} | Rank: ${rank} | Change (24Hr): ${parseFloat(changePercent24Hr).toFixed(2)}%`;
}
