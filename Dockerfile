# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение
# RUN npm run build

# Указываем порт, который будет использоваться для запуска приложения
EXPOSE 5173

# # Запускаем приложение
# CMD [ "npm", "run", "dev"]


CMD [ "tail", "-f", "/dev/null" ]