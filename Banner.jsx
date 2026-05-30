import React from 'react';

export default function Banner() {
  return (
    <section className="bg-[#0f172a] text-white text-center pt-16 pb-32 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Найдите лучших мастеров для вашего проекта
      </h1>
      <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm md:text-base">
        От мелкого ремонта до капитального строительства. Проверенные специалисты и безопасные сделки.
      </p>

      <div className="bg-white p-4 rounded-xl shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row gap-3 text-slate-800">
        <div className="flex-1 flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-3">
          <input type="text" placeholder="Какого специалиста вы ищете?" className="w-full focus:outline-none text-sm"/>
        </div>
        <div className="flex-1 flex items-center gap-2 pb-2 md:pb-0">
          <input type="text" placeholder="Город" className="w-full focus:outline-none text-sm"/>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-lg text-sm transition whitespace-nowrap">
          Найти специалиста
        </button>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap">
          Разместить объявление
        </button>
      </div>
    </section>
  );
}