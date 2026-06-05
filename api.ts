export const INITIAL_SPECIALISTS = [
  {
    id: 1,
    name: "Алексей Петров",
    title: "Специалист по электрике",
    category: "electricity",
    rating: 4.9,
    badges: ["PRO"],
    reviews: 24,
    price: 1500,
    experience: "Опыт 5 лет",
    avatar: "АП",
    tags: ["Электропроводка", "Освещение"],
    desc: "Монтаж электропроводки любой сложности в квартирах и частных домах"
  },
  {
    id: 2,
    name: "Марина Волкова",
    title: "Маляр-декоратор",
    category: "painting",
    rating: 5.0,
    badges: ["VERIFIED"],
    reviews: 42,
    price: 1200,
    experience: "Опыт 8 лет",
    avatar: "МВ",
    tags: ["Покраска", "Декор", "Обои"],
    desc: "Профессиональная покраска стен и декоративная штукатурка. Помогаю с подбором материалов."
  },
  {
    id: 3,
    name: "Иван Сергеев",
    title: "Сантехник",
    category: "plumbing",
    rating: 4.8,
    badges: ["EXPERT"],
    reviews: 19,
    price: 1800,
    experience: "Опыт 6 лет",
    avatar: "ИС",
    tags: ["Сантехника", "Бойлеры", "Ремонт"],
    desc: "Все виды сантехнических работ: от замены смесителя до разводки труб и установки отопления."
  }
];

export function filterSpecialists(
  specialists: typeof INITIAL_SPECIALISTS,
  searchQuery: string,
  selectedCategories: string[],
  priceFrom: number,
  priceTo: number,
  minRating: number
) {
  return specialists.filter((master) => {

    const matchesSearch =
      master.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      master.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes('all') ||
      selectedCategories.includes(master.category);

    const matchesPriceFrom = priceFrom ? master.price >= priceFrom : true;
    const matchesPriceTo = priceTo ? master.price <= priceTo : true;
    
    const matchesRating = master.rating >= minRating;

    return matchesSearch && matchesCategory && matchesPriceFrom && matchesPriceTo && matchesRating;
  });
}


export const INITIAL_ORDERS = [
  {
    id: 1,
    title: "Ремонт однокомнатной квартиры под ключ",
    category: "renovation",
    budget: 120000,
    location: "Ижевск",
    date: "Добавлено сегодня",
    desc: "Необходимо выполнить полный комплекс ремонтных работ в новостройке (38 кв.м.). Выравнивание стен, укладка ламината, разводка электрики, поклейка обоев и санузел под ключ. Материалы закуплены.",
    tags: ["Под ключ", "Новостройка", "Косметический ремонт"]
  },
  {
    id: 2,
    title: "Монтаж светодиодной ленты и замена розеток",
    category: "electricity",
    budget: 5000,
    location: "Ижевск",
    date: "Добавлено вчера",
    desc: "В гостиной нужно установить контурную светодиодную подсветку потолка (около 15 метров) с подключением контроллера и заменить 6 старых розеток на новые. Инструмент должен быть свой.",
    tags: ["Электрика", "Мелкий ремонт", "Освещение"]
  },
  {
    id: 3,
    title: "Установка радиаторов отопления и замена труб",
    category: "plumbing",
    budget: 25000,
    location: "Завьялово",
    date: "3 дня назад",
    desc: "Требуется демонтировать 3 старых чугунных радиатора и установить новые биметаллические батареи с байпасами. Также нужно частично заменить старые стальные трубы на полипропилен.",
    tags: ["Сантехника", "Отопление", "Сварочные работы"]
  }
];

export function filterOrders(
  orders: typeof INITIAL_ORDERS,
  searchQuery: string,
  selectedCategories: string[],
  budgetFrom: number,
  budgetTo: number
) {
  return orders.filter((order) => {
    const matchesSearch =
      order.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.desc.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes('all') ||
      selectedCategories.includes(order.category);

    const matchesBudgetFrom = budgetFrom ? order.budget >= budgetFrom : true;
    const matchesBudgetTo = budgetTo ? order.budget <= budgetTo : true;

    return matchesSearch && matchesCategory && matchesBudgetFrom && matchesBudgetTo;
  });
}
