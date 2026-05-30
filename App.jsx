import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Categories from './components/Categories';
import Specialists from './components/Specialists';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Banner />
        <Stats />
        <Categories />
        <Specialists />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}