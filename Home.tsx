import Banner from '../components/Banner';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Specialists from '../components/Specialists';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <>
      <Banner />
      <Stats />
      <Categories />
      <Specialists />
      <CtaBanner />
    </>
  );
}