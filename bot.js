require('dotenv').config(); // подключаем .env

const TelegramBot = require('node-telegram-bot-api');

// Берём токен из переменной окружения
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Привет! Открой приложение:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Путешествуй налегке!",
            web_app: { url: "https://travel-webapp-beige.vercel.app/" }
          }
        ]
      ]
    }
  });
});