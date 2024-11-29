# Crypto Price Tracker CLI

A command-line interface (CLI) tool to track cryptocurrency prices. The `crypto-price-tracker` fetches real-time cryptocurrency data from the [CoinCap API](https://coincap.io/) and displays it in the terminal.

## Features

- Check the prices of top cryptocurrencies.
- Specify multiple cryptocurrencies to fetch by their IDs (e.g., `bitcoin`, `ethereum`).
- Simple and efficient command-line interface with intuitive commands.

## Tools and Dependencies

This project uses the following tools and libraries:

- **Node.js**: Runtime environment to execute JavaScript outside the browser.
- **Commander.js**: A library to build and manage CLI commands.
- **Chalk**: For colored terminal output.
- **ESLint**: For code linting and maintaining consistent coding standards.
- **Fetch API**: For making HTTP requests to the CoinCap API.

## Installation

### Prerequisites

Make sure you have the following installed:

1. **Node.js**: [Download and install Node.js](https://nodejs.org/).
2. **npm**: Comes bundled with Node.js.

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker
```

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

Link the CLI tool

```bash
npm link
```

Now you can use the CLI tool from anywhere on your system by typing ctprice.

## Usage

### Commands

The CLI provides the following command:

```bash
ctprice price
```

Displays the current prices of top cryptocurrencies.

### Options

--coin `<id>`: Cryptocurrency ID (e.g., bitcoin, ethereum, solana). Default is bitcoin,ethereum,solana.

### Example

```bash
ctprice price --coin=bitcoin,ethereum,solana
```

This command will display the current prices of Bitcoin, Ethereum, and Solana.

## Project Structure

```plaintext
crypto-price-tracker/
├── src/
│   ├── bin/
│   │   └── ctprice.js      # Entry point for the CLI tool
│   ├── constants/
│   │   └── url.js          # Base URL for the CoinCap API
│   ├── services/
│   │   └── cryptoService.js # Service for fetching cryptocurrency data
│   ├── utils/
│   │   └── output.js       # Utility for formatting CLI output
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation
```
