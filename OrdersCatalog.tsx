import { useState } from 'react';
import { INITIAL_ORDERS, filterOrders } from '../services/api';

export default function OrdersCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>(['all']);
  const [budgetFrom, setBudgetFrom] = useState('');
  const [budgetTo, setBudgetTo] = useState('');
  const [filteredList, setFilteredList] = useState(INITIAL_ORDERS);
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
    const result = filterOrders(
      INITIAL_ORDERS,
      searchQuery,
      categories,
      Number(budgetFrom),
      Number(budgetTo)
    );
    setFilteredList(result);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const result = filterOrders(
      INITIAL_ORDERS,
      value,
      categories,
      Number(budgetFrom),
      Number(budgetTo)
    );
    setFilteredList(result);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <div className="catalog-title-block">
          <h1>Каталог заказов</h1>
          <p>Найдите подходящий строительный заказ или подработку с прямой оплатой</p>
        </div>
        <div className="catalog-search-bar">
          <input 
            type="text" 
            placeholder="Что нужно сделать?" 
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="catalog-content">
        <aside className="filters-sidebar">
          <div className="filter-section">
            <h3>Категории заказов</h3>
            <div className="filter-options">
              <label>
                <input type="checkbox" checked={categories.includes('all')} onChange={() => handleCategoryChange('all')} /> 
                Все категории
              </label>
              <label>
                <input type="checkbox" checked={categories.includes('renovation')} onChange={() => handleCategoryChange('renovation')} /> 
                Ремонт под ключ
              </label>
              <label>
                <input type="checkbox" checked={categories.includes('electricity')} onChange={() => handleCategoryChange('electricity')} /> 
                Электрика
              </label>
              <label>
                <input type="checkbox" checked={categories.includes('plumbing')} onChange={() => handleCategoryChange('plumbing')} /> 
                Сантехника
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Бюджет (₽)</h3>
            <div className="price-inputs">
              <input type="number" placeholder="от" value={budgetFrom} onChange={(e) => setBudgetFrom(e.target.value)} />
              <input type="number" placeholder="до" value={budgetTo} onChange={(e) => setBudgetTo(e.target.value)} />
            </div>
          </div>

          <button className="btn-apply-filters" onClick={handleApplyFilters}>
            Применить фильтры
          </button>
        </aside>

        <main className="catalog-list">
          <div className="results-counter">
            Актуальных заказов: <span>{filteredList.length}</span>
          </div>

          <div className="catalog-grid">
            {filteredList.length > 0 ? (
              filteredList.map((order) => (
                <div key={order.id} className="catalog-master-card">
                  <div className="master-card-main">

                    <div className="master-card-left">
                      <div className="master-meta">
                        <h2>{order.title}</h2>
                        <div className="master-stats-row" style={{ marginTop: '4px' }}>
                          <span className="master-exp">{order.location}</span>
                          <span className="master-reviews">{order.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="master-card-right">
                      <div className="master-price-block">
                        <span className="price-label">Бюджет</span>
                        <span className="price-value" style={{ color: 'var(--color-orange)' }}>
                          {order.budget ? `${order.budget.toLocaleString()} ₽` : 'Договорная'}
                        </span>
                      </div>
                      <button className="btn-view-profile" style={{ backgroundColor: 'var(--color-orange)' }}>
                        Откликнуться
                      </button>
                    </div>
                  </div>

                  <div className="master-card-footer">
                    <p className="master-catalog-desc">{order.desc}</p>
                    <div className="master-tags">
                      {order.tags.map((tag, i) => (
                        <span key={i} className="catalog-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='master-not-found'>
                Заказы с такими фильтрами не найдены 
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}
