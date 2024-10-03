const express = require('express');
const dotenv = require('dotenv').config({ path: './.env' });
const bodyParser = require('body-parser');
const cors = require('cors');
const log = require('./util/Logger');
let { botActive, startBot, getBalance, getLastBuyPrice, getShares, getTotalProfit, getTotalLoss, getStockPrice } = require('./core/tradingbot');

// These all api's could be in mvc structure but because the number of api's to implement are less and for simplicity I have implemented them in this way.

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 6000;

app.get('/', function(req, res) {
    res.send('Hello World');
    const API_KEY = process.env.API_KEY;
    log.Info(API_KEY);
});

app.post('/startBot', function(req, res) {
    if(!botActive) {
        log.Info('Bot started');
        // botActive = true;
        const Symbol = req.body.Symbol;
        startBot(Symbol);
        return res.json({ message: 'Trading bot started.' });
    }
    else {
        return res.status(400).send('Bot is already active');
    }
})

app.get('/summary', function(req, res) {
    return res.json({
        balance: getBalance(),
        lastBuyPrice: getLastBuyPrice(),
        shares: getShares(),
        totalProfit: getTotalProfit(),
        totalLoss: getTotalLoss(),
        stockPrice: getStockPrice()
    });
});

app.get('/currentBalance', function(req, res) {
    return res.json({ balance: getBalance() });
});

app.get('/lastBuyPrice', function(req, res) {
    return res.json({ lastBuyPrice: getLastBuyPrice() });
});

app.get('/shares', function(req, res) {
    return res.json({ shares: getShares() });
});

app.get('/totalProfit', function(req, res) {
    return res.json({ totalProfit: getTotalProfit() });
});

app.get('/totalLoss', function(req, res) {
    return res.json({ totalLoss: getTotalLoss() });
});

app.get('/stockPrice', function(req, res) {
    return res.json({ stockPrice: getStockPrice() });
});

app.get('/status', function(req, res) {
    if(botActive) {
        return res.json({ message: 'Bot is active' });
    }
    else {
        return res.json({ message: 'Bot is not active' });
    }
});

app.post('/stopBot', function(req, res) {
    if(botActive) {
        log.Info('Bot stopped');
        botActive = false;
        return res.json({ message: 'Trading bot stopped.' });
    }
    else {
        return res.status(400).send('Bot is not active');
    }
});



app.listen(port, function() {
    log.Info(`Server is running on port ${port}`);
});