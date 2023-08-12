//*  Bibliotheca
const express = require('express');
const axios = require('axios');
const {Telegraf} = require('telegraf');
require('dotenv').config()
const app = express()
const {TOKEN, SERVER_URL, PORT } = process.env
//Express body parser
app.use(express.json())
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL + URI 

//const botAddress = `${TELEGRAM_API}/setwebhook?url=${WEBHOOK_URL}` This addres in not needed with Telegraf

const bibBot = new Telegraf(TOKEN)

bibBot.launch()

bibBot.start(async (ctx) => {
    await ctx.reply(`Welcome to my bot`)
    console.log(ctx);
})