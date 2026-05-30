import React from 'react';

export default function Categories() {
  const categories = [
    { name: "Интерьер" },
    { name: "Электрика" },
    { name: "Сантехника" },
    { name: "Ремонт" },
    { name: "Отделка стен" },
    { name: "Кровля" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Популярные категории</h2>
          <p className="text-xs text-gray-500">Выберите направление работ</p>
        </div>
        <a href="#" className="text-xs font-semibold text-orange-600 hover:underline">
          Смотреть все
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition text-center cursor-pointer group">
            <div className="text-xs font-medium text-gray-700">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}