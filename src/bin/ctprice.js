#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { program } from 'commander';
import { fetchTopCryptoCurrencies } from '../services/cryptoService.js';
import { formatOutput } from '../utils/output.js';

const pkgPath = new URL('../../package.json', import.meta.url);
const pkg = JSON.parse(await readFile(pkgPath, 'utf8'));

program.name('crypto-tracker').description('CLI tool to track cryptocurrency prices').version(pkg.version);

program
  .command('price')
  .description('Check price of top cryptocurrencies')
  .option('--coin <id>', 'Cryptocurrency ID (bitcoin, ethereum etc)', 'bitcoin,ethereum,solana')
  .action(async (cmd) => {
    const cryptos = await fetchTopCryptoCurrencies(cmd);

    cryptos.forEach((crypto) => {
      const output = formatOutput(crypto);

      console.log(output);
    });
  });

program.parse(process.argv);
