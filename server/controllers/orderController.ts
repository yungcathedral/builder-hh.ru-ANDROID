import type { Request, Response } from 'express';

const ORDERS = [
  {
    id: 1,
    title: "Ремонт однокомнатной квартиры под ключ",
    category: "renovation",
    budget: 120000,
    location: "Москва",
    date: "Добавлено сегодня",
    desc: "Необходимо выполнить полный комплекс ремонтных работ в новостройке (38 кв.м.). Выравнивание стен, укладка ламината, разводка электрики, поклейка обоев и санузел под ключ. Материалы закуплены.",
    tags: ["Под ключ", ["Новостройка"], "Косметический ремонт"]
  },
  {
    id: 2,
    title: "Монтаж светодиодной ленты и замена розеток",
    category: "electricity",
    budget: 5000,
    location: "Санкт-Петербург",
    date: "Добавлено вчера",
    desc: "В гостиной нужно установить контурную светодиодную подсветку потолка (около 15 метров) с подключением контроллера и заменить 6 старых розеток на новые. Инструмент должен быть свой.",
    tags: ["Электрика", "Мелкий ремонт", "Освещение"]
  }
];

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;
    let result = [...ORDERS];

    if (category && category !== 'all') {
      result = result.filter(o => o.category === category);
    }

    if (search) {
      result = result.filter(o => 
        o.title.toLowerCase().includes(String(search).toLowerCase()) ||
        o.desc.toLowerCase().includes(String(search).toLowerCase())
      );
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера при получении заказов" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const order = ORDERS.find(o => o.id === id);

    if (!order) {
      return res.status(404).json({ message: "Заказ не найден" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера при получении деталей заказа" });
  }
};