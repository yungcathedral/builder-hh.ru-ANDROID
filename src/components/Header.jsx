import React from 'react';

export default function Header() {
    return (
        <header className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between border-b border-slate-700">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold tracking-wide">BuildLink</div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white transition">Specialist Catalog</a>
          <a href="#" className="hover:text-white transition">Order Catalog</a>
        </nav>
      </div>
      
      <div className="flex items-center gap-4 max-w-md w-full mx-4">
        <input 
          type="text" 
          placeholder="Поиск услуг..." 
          className="w-full bg-slate-800 text-sm text-white px-4 py-2 rounded border border-slate-700 focus:outline-none focus:border-orange-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-300 hover:text-white p-2">Уведомления</button>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-medium transition">
          Login
        </button>
      </div>
    </header>
    );
}