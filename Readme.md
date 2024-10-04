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

### 4. Install Dependencies
- After cloning the repository, navigate to the project directory and install the necessary dependencies:

## 5. API Endpoints

Here is a list of available endpoints:

### 1. POST `/startBot`

Start the trading bot with a specified stock symbol.

- **Request**:
    ```bash
    POST /startBot
    {
      "Symbol": "AAPL"
    }
    ```

- **Response**:
    ```json
    {
      "message": "Trading bot started."
    }
    ```

- **Error**:
    - 400: "Bot is already active" if the bot is running.

---

### 2. POST `/stopBot`

Stop the trading bot.

- **Response**:
    ```json
    {
      "message": "Trading bot stopped."
    }
    ```

- **Error**:
    - 400: "Bot is not active" if the bot is not running.

---

### 3. GET `/summary`

Retrieve the trading bot’s summary, including balance, last buy price, shares held, profit, loss, and stock price.

- **Response**:
    ```json
    {
      "balance": 10000,
      "lastBuyPrice": 220,
      "shares": 50,
      "totalProfit": 500,
      "totalLoss": 100,
      "stockPrice": 230
    }
    ```

---

### 4. GET `/currentBalance`

Get the current balance of the trading account.

- **Response**:
    ```json
    {
      "balance": 10000
    }
    ```

---

### 5. GET `/lastBuyPrice`

Get the price at which the last stock purchase was made.

- **Response**:
    ```json
    {
      "lastBuyPrice": 220
    }
    ```

---

### 6. GET `/shares`

Get the number of shares currently held.

- **Response**:
    ```json
    {
      "shares": 50
    }
    ```

---

### 7. GET `/totalProfit`

Get the total profit from trades.

- **Response**:
    ```json
    {
      "totalProfit": 500
    }
    ```

---

### 8. GET `/totalLoss`

Get the total loss from trades.

- **Response**:
    ```json
    {
      "totalLoss": 100
    }
    ```

---

### 9. GET `/stockPrice`

Get the current price of the stock being tracked by the bot.

- **Response**:
    ```json
    {
      "stockPrice": 230
    }
    ```

---

### 10. GET `/status`

Check whether the trading bot is active.

- **Response**:
    ```json
    {
      "message": "Bot is active"
    }
    ```
    or
    ```json
    {
      "message": "Bot is not active"
    }
    ```

```bash
npm install
node index.js