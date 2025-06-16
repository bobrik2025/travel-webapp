# Базовый образ с Node.js
FROM node:18

# Рабочая директория
WORKDIR /app

# Копируем все файлы в контейнер
COPY . .

# Установка зависимостей
RUN npm install

# Сборка React-приложения
RUN npm run build

# Указываем переменные окружения (если задаются извне)
ENV TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}

# Установка serve для React и запуск бота + сайта
RUN npm install -g serve

# Открываем порт, который будет слушать приложение
EXPOSE 3000

# Команда запуска: сначала бот, потом сайт
CMD node bot.js & serve -s build -l 3000
