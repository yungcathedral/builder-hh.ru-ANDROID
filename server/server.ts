import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import specialistRoutes from './routes/specialistRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Загружаем переменные окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка промежуточного ПО (Middleware)
app.use(cors());
app.use(express.json()); // Позволяет читать JSON в теле запросов

// Подключаем маршруты API, которые импортировали выше
app.use('/api/specialists', specialistRoutes);
app.use('/api/orders', orderRoutes);

// Базовый тестовый роут
app.get('/', (req, res) => {
  res.send('BuildLink API работает в штатном режиме !!!');
});

// Запуск прослушивания порта
app.listen(PORT, () => {
  console.log(`Сервер BuildLink успешно запущен на порту ${PORT}`);
});
