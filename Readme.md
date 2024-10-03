# Trading Bot Application

## Overview
This project is a trading bot application that implements a mean reversion trading strategy. The bot uses market data from the [Finnhub API](https://finnhub.io/) to make buy/sell decisions based on stock price movements. 

## Requirements
- Node.js (v12 or later)
- NPM (Node Package Manager)

## Getting Started

### 1. Obtain an API Key
To use the Finnhub API, you will need to obtain an API key:
1. Go to the [Finnhub Dashboard](https://finnhub.io/dashboard).
2. Sign up or log in to your account.
3. Generate your API key from the dashboard.

### 2. API Key Note
- **Important**: The API key should be changed after a certain number of uses as it is not free. Please monitor your usage to avoid unexpected charges.
- The source does not update frequently for getting real-time updates, so ensure to check for market changes and adjust your strategy accordingly.

### 3. Note: 
- There will be no logs visible in the terminal and will only be visivle in the logs folder when you run the project.

### 3. Install Dependencies
After cloning the repository, navigate to the project directory and install the necessary dependencies:

```bash
npm install
node index.js