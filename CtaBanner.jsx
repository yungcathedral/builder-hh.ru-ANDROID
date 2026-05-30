import React from 'react';

export default function CtaBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-orange-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 text-white shadow-xl">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-3">Готовы начать свой проект?</h2>
          <p className="text-orange-100 text-sm mb-6">
            Разместите заказ и получите первые предложения от мастеров уже через 15 минут
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-orange-600 font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-orange-50 transition">
              Опубликовать заказ
            </button>
            <button className="border border-white text-white font-medium px-5 py-2.5 rounded-lg text-sm hover:bg-orange-600 transition">
              Как это работает?
            </button>
          </div>
        </div>

        <div className="bg-orange-600/40 border border-orange-400/30 p-6 rounded-xl max-w-sm w-full">
          <div className="font-bold mb-1 flex items-center gap-2">BuildLink Pro</div>
          <div className="text-[11px] text-orange-100 uppercase font-bold tracking-wider mb-2">Для профессионалов</div>
          <p className="text-xs text-orange-50 mb-4">
            Получайте больше заказов и развивайте свой бизнес вместе с нами
          </p>
          <a href="#" className="text-xs font-bold underline hover:text-orange-100 inline-flex items-center gap-1">
            Стать партнером →
          </a>
        </div>
      </div>
    </section>
  );
}