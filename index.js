//* Bibliotheca
const {Telegraf} = require('telegraf');
const axios = require('axios');
require("dotenv").config()
const {TOKEN} = process.env
const myBot = new Telegraf(TOKEN)

myBot.launch()

myBot.start((ctx) => {
    console.log("Welcome to my library bot");
})