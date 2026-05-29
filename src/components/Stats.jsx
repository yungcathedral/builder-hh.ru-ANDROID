import React from 'react';

export default function Stats() {
  const stats = [
    { name: "Проверенных мастеров", count: "15,000+",},
    { name: "Выполненных заказов" , count: "42,000+"},
    { name: "Гарантия качества", count: "100%" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 border border-gray-100">
          <div>
            <div className="text-xl font-bold">{item.count}</div>
            <div className="text-xs text-gray-500">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}