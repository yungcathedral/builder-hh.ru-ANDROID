import { useState, useEffect } from 'react';
import { INITIAL_SPECIALISTS, filterSpecialists } from '../services/api';
import { Link } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

type SpecialistType = typeof INITIAL_SPECIALISTS[0];

export default function SpecialistsCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>(['all']);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [minRating, setMinRating] = useState(0); 

  const [allSpecialists, setAllSpecialists] = useState<SpecialistType[]>([]);
  const [filteredList, setFilteredList] = useState<SpecialistType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'specialists'));
        
        const specialistsData = querySnapshot.docs.map(doc => {
          const data = doc.data();

          return {
            id: doc.id as any, 
            name: data.name || 'Без имени',
            title: data.title || 'Специалист',
            category: data.category || 'other',
            rating: Number(data.rating) || 0,
            price: Number(data.price) || 0,
            experience: data.experience || data.expirience || 'Опыт не указан', 
            desc: data.desc || '',
            avatar: data.name ? data.name.split(' ').map((n: string) => n[0]).join('') : '??',

            badges: [], 
            tags: [], 
            reviews: 0 
          };
        });
        
        setAllSpecialists(specialistsData);
        setFilteredList(specialistsData);
      } catch (error) {
        console.error("Ошибка при получении мастеров из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialists();
  }, []);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setCategories(['all']); 
    } else {
      setCategories((prev) => {
        const cleanPrev = prev.filter((c) => c !== 'all');
        if (cleanPrev.includes(category)) {
          const updated = cleanPrev.filter((c) => c !== category);
          return updated.length === 0 ? ['all'] : updated; 
        } else {
          return [...cleanPrev, category];
        }
      });
    }
  };

  const handleApplyFilters = () => {
    const result = filterSpecialists(
      allSpecialists,
      searchQuery,
      categories,
      priceFrom !== '' ? Number(priceFrom) : 0,
      priceTo !== '' ? Number(priceTo) : Infinity,
      minRating
    );
    setFilteredList(result);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const result = filterSpecialists(
      allSpecialists,
      value,
      categories,
      priceFrom !== '' ? Number(priceFrom) : 0,
      priceTo !== '' ? Number(priceTo) : Infinity,
      minRating
    );
    setFilteredList(result);
  };

  if (loading) {
    return <div className="catalog-container"><h2>Загрузка каталога специалистов...</h2></div>;
  }

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <div className="catalog-title-block">
          <h1>Каталог специалистов</h1>
          <p>Найдено мастеров: {filteredList.length}</p>
        </div>

        <div className="catalog-search-bar">
          <input 
            type="text" 
            className='search-input'
            placeholder="Какого мастера или услугу вы ищете?" 
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="catalog-content">
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Категория услуг</h3>
            <div className="filter-options">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.includes('all')} 
                  onChange={() => handleCategoryChange('all')} 
                />
                <span>Все категории</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.includes('electricity')} 
                  onChange={() => handleCategoryChange('electricity')} 
                />
                <span>Электрика</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.includes('painting')} 
                  onChange={() => handleCategoryChange('painting')} 
                />
                <span>Малярные работы</span>
              </label>
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={categories.includes('plumbing')} 
                  onChange={() => handleCategoryChange('plumbing')} 
                />
                <span>Сантехника</span>
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Стоимость работ (₽/ч)</h3>
            <div className="price-inputs">
              <input 
                type="number" 
                placeholder="от" 
                value={priceFrom} 
                onChange={(e) => setPriceFrom(e.target.value)} 
              />
              <input 
                type="number" 
                placeholder="до" 
                value={priceTo} 
                onChange={(e) => setPriceTo(e.target.value)} 
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Рейтинг мастера</h3>
            <div className="filter-options">
              <label>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={minRating === 4.5} 
                  onChange={() => setMinRating(4.5)} 
                /> 
                <span>★ 4.5 и выше</span>
              </label>
              <label>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={minRating === 4.0} 
                  onChange={() => setMinRating(4.0)} 
                /> 
                <span>★ 4.0 и выше</span>
              </label>
              <label>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={minRating === 0} 
                  onChange={() => setMinRating(0)} 
                /> 
                <span>Любой рейтинг</span>
              </label>
            </div>
          </div>

          <button className="btn-apply-filters" onClick={handleApplyFilters}>
            Применить фильтры
          </button>
        </aside>

        <main className="masters-list-wrapper">
          <div className="masters-list">
            {filteredList.length > 0 ? (
              filteredList.map((master) => (
                <div key={master.id} className="catalog-master-card">
                  <div className="master-card-main">
                    <div className="master-card-left">
                      <div className="catalog-avatar">
                        {master.avatar}
                      </div>
                      <div className="master-meta">
                        <h2>{master.name}</h2>
                        <p className="master-spec-title">{master.title}</p>
                        <div className="master-stats-row">
                          <span className="master-rating">★ {master.rating}</span>
                          <span className="master-exp">{master.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="master-card-right">
                      <div className="master-price-block">
                        <span className="price-label">Цена от</span>
                        <span className="price-value">{master.price} ₽/ч</span>
                      </div>
                      <Link 
                        to={`/specialist/${master.id}`} 
                        className="btn-view-profile" 
                        style={{ textDecoration: 'none', textAlign: 'center', display: 'inline-block' }}
                      >
                        Связаться
                      </Link>
                    </div>
                  </div>

                  <div className="master-card-footer">
                    <p className="master-catalog-desc">{master.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="master-not-found">
                Мастера с такими фильтрами не найдены 
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}