import { useState } from 'react';
import { INITIAL_SPECIALISTS, filterSpecialists } from '../services/api';

export default function SpecialistsCatalog() {

  const [searchQuery, setSearchQuery] = useState('');

  const [categories, setCategories] = useState<string[]>(['all']);
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [minRating, setMinRating] = useState(0); 

  const [filteredList, setFilteredList] = useState(INITIAL_SPECIALISTS);

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
      INITIAL_SPECIALISTS,
      searchQuery,
      categories,
      Number(priceFrom),
      Number(priceTo),
      minRating
    );
    setFilteredList(result);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const result = filterSpecialists(
      INITIAL_SPECIALISTS,
      value,
      categories,
      Number(priceFrom),
      Number(priceTo),
      minRating
    );
    setFilteredList(result);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <div className="catalog-title-block">
          <h1>Каталог специалистов</h1>
          <p>Найдите надежного исполнителя для любых строительных и ремонтных задач</p>
        </div>
        <div className="catalog-search-bar">
          <input 
            type="text" 
            placeholder="Какого мастера или услугу вы ищете?" 
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="catalog-content">

        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Категории</h3>
            <div className="filter-options">
              <label>
                <input 
                  type="checkbox" 
                  checked={categories.includes('all')} 
                  onChange={() => handleCategoryChange('all')} 
                /> 
                Все категории
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={categories.includes('electricity')} 
                  onChange={() => handleCategoryChange('electricity')} 
                /> 
                Электрика
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={categories.includes('plumbing')} 
                  onChange={() => handleCategoryChange('plumbing')} 
                /> 
                Сантехника
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={categories.includes('painting')} 
                  onChange={() => handleCategoryChange('painting')} 
                /> 
                Малярные работы
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Стоимость работ (₽/час)</h3>
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
                ★ 4.5 и выше
              </label>
              <label>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={minRating === 4.0} 
                  onChange={() => setMinRating(4.0)} 
                /> 
                ★ 4.0 и выше
              </label>
              <label>
                <input 
                  type="radio" 
                  name="rating" 
                  checked={minRating === 0} 
                  onChange={() => setMinRating(0)} 
                /> 
                Любой рейтинг
              </label>
            </div>
          </div>

          <button className="btn-apply-filters" onClick={handleApplyFilters}>
            Применить фильтры
          </button>
        </aside>

        <main className="catalog-list">
          <div className="results-counter">
            Найдено специалистов: <span>{filteredList.length}</span>
          </div>

          <div className="catalog-grid">
            {filteredList.length > 0 ? (
              filteredList.map((master) => (
                <div key={master.id} className="catalog-master-card">
                  <div className="master-card-main">
                    <div className="master-card-left">
                      <div className="catalog-avatar">{master.avatar}</div>
                      <div className="master-meta">
                        <h2>{master.name}</h2>
                        <p className="master-spec-title">{master.title}</p>
                        <div className="master-stats-row">
                          <span className="master-rating">★ {master.rating}</span>
                          <span className="master-reviews">({master.reviews} отзывов)</span>
                          <span className="master-exp">{master.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="master-card-right">
                      <div className="master-price-block">
                        <span className="price-label">Цена от</span>
                        <span className="price-value">{master.price} ₽/ч</span>
                      </div>
                      <button className="btn-view-profile">Связаться</button>
                    </div>
                  </div>

                  <div className="master-card-footer">
                    <p className="master-catalog-desc">{master.desc}</p>
                    <div className="master-tags">
                      {master.tags.map((tag, i) => (
                        <span key={i} className="catalog-tag">{tag}</span>
                      ))}
                    </div>
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
