require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
// 👉 Добавь вот эту строку сразу после получения токена:
console.log('BOT TOKEN:', token);

if (!token) {
  console.error("❌ Ошибка: TELEGRAM_BOT_TOKEN не задан!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Привет! Открой приложение:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 Путешествуй налегке!",
            web_app: {
              url: "https://bobrik2025-travel-webapp-9272.twc1.net" // 👈 здесь укажи свой домен Timeweb позже
            }
          }
        ]
      ]
    }
  });
});
