const TelegramBot = require('node-telegram-bot-api');

const token = '7731716861:AAHzB0icnQtooH9CkrxhA5I5_2E3gkzig3w'; // вставь токен от BotFather
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