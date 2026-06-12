import type { Request, Response } from 'express';

const SPECIALISTS = [
  {
    id: 1,
    name: "Алексей Петров",
    title: "Специалист по электрике",
    category: "electricity",
    rating: 4.9,
    reviews: 24,
    price: 1500,
    experience: "Опыт 5 лет",
    avatar: "АП",
    tags: ["Wiring", "Smart Home", "Lighting"],
    desc: "Выполняю монтаж электропроводки любой сложности в квартирах и частных домах. Качественные материалы, гарантия на работу."
  },
  {
    id: 2,
    name: "Марина Волкова",
    title: "Маляр-декоратор",
    category: "painting",
    rating: 5.0,
    reviews: 42,
    price: 1200,
    experience: "Опыт 8 лет",
    avatar: "МВ",
    tags: ["Painting", "Decor", "Wallpaper"],
    desc: "Профессиональная покраска стен, оклейка обоев и декоративная штукатурка. Помогаю с точным подбором материалов."
  },
  {
    id: 3,
    name: "Иван Сергеев",
    title: "Сантехник",
    category: "plumbing",
    rating: 4.2,
    reviews: 19,
    price: 1800,
    experience: "Опыт 6 лет",
    avatar: "ИС",
    tags: ["Plumbing", "Boilers", "Repair"],
    desc: "Все виды сантехнических работ: от простой замены смесителя до разводки труб и установки систем отопления."
  }
];

export const getAllSpecialists = async (req: Request, res: Response) => {
  try {
    const { category, search, priceFrom, priceTo, minRating } = req.query;
    let result = [...SPECIALISTS];

    if (category) {
      const categoryList = String(category).split(',');
      if (!categoryList.includes('all') && categoryList.length > 0) {
        result = result.filter(m => categoryList.includes(m.category));
      }
    }

    if (search) {
      const searchStr = String(search).toLowerCase();
      result = result.filter(m => 
        m.name.toLowerCase().includes(searchStr) ||
        m.title.toLowerCase().includes(searchStr) ||
        m.desc.toLowerCase().includes(searchStr)
      );
    }

    if (priceFrom && priceFrom !== '') {
      const minPrice = Number(priceFrom);
      result = result.filter(m => m.price >= minPrice);
    }

    if (priceTo && priceTo !== '') {
      const maxPrice = Number(priceTo);
      result = result.filter(m => m.price <= maxPrice);
    }

    if (minRating && Number(minRating) > 0) {
      const ratingLimit = Number(minRating);
      result = result.filter(m => m.rating >= ratingLimit);
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера при получении специалистов" });
  }
};

export const getSpecialistById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const master = SPECIALISTS.find(m => m.id === id);

    if (!master) {
      return res.status(404).json({ message: "Мастер не найден" });
    }

    res.json(master);
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
};