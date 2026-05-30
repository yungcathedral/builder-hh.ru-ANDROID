import React from 'react';

export default function Specialists() {
  const specialists = [
    {
      name: "Алексей Петров",
      title: "Электрика",
      rating: "4.9",
      badges: ["PRO", "VERIFIED"],
      desc: "Монтаж электропроводки любой сложности в квартирах и частных домах",
      tags: ["Wiring", "Smart Home", "Lighting"]
    },

    {
      name: "Марина Волкова",
      title: "Маляр-декоратор",
      rating: "5.0",
      badges: ["VERIFIED"],
      desc: "Профессиональная покраска стен и декоративная штукатурка. Помогаю с подбором материалов.",
      tags: ["Painting", "Decor", "Venetian"]
    },
    
    {
      name: "Иван Сергеев",
      title: "Сантехник",
      rating: "4.8",
      badges: ["EXPERT"],
      desc: "Все виды сантехнических работ: от замены смесителя до разводки труб и установки отопления.",
      tags: ["Pipe Fitting", "Boilers", "Repair"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Рекомендованные специалисты</h2>
        <p className="text-xs text-gray-500">Мастера с высоким рейтингом и отзывами</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialists.map((master, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-400">
                    {master.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{master.name}</h3>
                    <p className="text-xs text-gray-500">{master.title}</p>
                    <div className="flex gap-1 mt-1">
                      {master.badges.map((b, i) => (
                        <span key={i} className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold uppercase">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                  ★ {master.rating}
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mb-4 line-clamp-3">{master.desc}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {master.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#92400e] hover:bg-[#78350f] text-white text-xs py-2.5 rounded-lg font-medium transition">
              Связаться с мастером
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}