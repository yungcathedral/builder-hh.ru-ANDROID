import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Specialists from '../components/Specialists';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <Specialists />
      <CtaBanner />
    </>
  );
}