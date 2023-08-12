const express = require('express');
const { Telegraf } = require('telegraf');
require('dotenv').config()
const app = express();
app.use(express.json())

const {TOKEN, SERVER_URL, PORT} = process.env
const myBot = new Telegraf(TOKEN);

// Telegram webhook endpoint
webhookAddress = `${SERVER_URL}/webhook/${TOKEN}`
console.log(webhookAddress);
app.post(`${SERVER_URL}/webhook/${TOKEN}`, (req, res) => {
  myBot.handleUpdate(req.body);
  res.status(200).send('OK');
});

// Start your bot
myBot.launch();

// Start the Express server
app.listen(3000, () => {
  console.log(`Your server is running on port ${PORT}`);
});
