import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-bold mb-3">BuildLink</div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Ваш надежный партнер в мире строительства и ремонта. Найдем мастера для любой задачи.
          </p>
          <div className="flex gap-3 text-lg">
            <a href="#" className="hover:text-orange-500">🌐</a>
            <a href="#" className="hover:text-orange-500">💬</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">КОМПАНИЯ</h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Support</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Legal Information</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">УСЛУГИ</h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li><a href="#" className="hover:text-white">Specialist Catalog</a></li>
            <li><a href="#" className="hover:text-white">Order Catalog</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">ПРИЛОЖЕНИЕ</h4>
          <p className="text-xs text-slate-400 mb-3">Скачайте наше мобильное приложение для быстрого доступа к сервису.</p>
          <div className="space-y-2 max-w-[140px]">
            <button className="w-full bg-black text-white text-[10px] py-1.5 px-3 rounded flex items-center gap-2 border border-slate-700">
                App Store
            </button>
            <button className="w-full bg-black text-white text-[10px] py-1.5 px-3 rounded flex items-center gap-2 border border-slate-700">
                Google Play
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 px-4 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between max-w-6xl mx-auto">
        <div>© 2024 BuildLink Construction Services. All rights reserved.</div>
        <div className="flex gap-4 justify-center mt-2 sm:mt-0">
          <span>Русский</span>
          <span>Ижевск</span>
        </div>
      </div>
    </footer>
  );
}