import { useState, useEffect } from 'react';
import { filterOrders } from '../services/api';
import { Link } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

export default function OrdersCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>(['all']);
  const [budgetFrom, setBudgetFrom] = useState('');
  const [budgetTo, setBudgetTo] = useState('');

  const [allOrders, setAllOrders] = useState<any[]>([]);
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'orders'));
        const ordersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setAllOrders(ordersData);
        setFilteredList(ordersData);
      } catch (error) {
        console.error("Ошибка при получении заказов из Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
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
    const result = filterOrders(
      allOrders,
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
      allOrders,
      value,
      categories,
      Number(budgetFrom),
      Number(budgetTo)
    );
    setFilteredList(result);
  };

  if (loading) {
    return <div className="catalog-container"><h2>Загрузка каталога заказов...</h2></div>;
  }

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <div className="catalog-title-block">
          <h1>Каталог заказов</h1>
          <p>Найдено заказов: {filteredList.length}</p>
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
            <h3>Категории</h3>
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
                  checked={categories.includes('renovation')} 
                  onChange={() => handleCategoryChange('renovation')} 
                />
                <span>Ремонт под ключ</span>
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
                  checked={categories.includes('plumbing')} 
                  onChange={() => handleCategoryChange('plumbing')} 
                />
                <span>Сантехника</span>
              </label>
            </div>
          </div>

          <div className="filter-section">
            <h3>Бюджет (₽)</h3>
            <div className="price-inputs">
              <input 
                type="number" 
                placeholder="от" 
                value={budgetFrom} 
                onChange={(e) => setBudgetFrom(e.target.value)} 
              />
              <input 
                type="number" 
                placeholder="до" 
                value={budgetTo} 
                onChange={(e) => setBudgetTo(e.target.value)} 
              />
            </div>
          </div>

          <button className="btn-apply-filters" onClick={handleApplyFilters}>
            Применить фильтры
          </button>
        </aside>

        <main className="masters-list-wrapper">
          <div className="masters-list">
            {filteredList.length > 0 ? (
              filteredList.map((order) => (
                <div key={order.id} className="catalog-master-card">
                  <div className="master-card-main">
                    <div className="master-card-left">
                      <div className="master-meta">
                        <h2>{order.title}</h2>
                        <div className="master-stats-row">
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
                      <Link to={`/order/${order.id}`} className="btn-view-profile">Откликнуться</Link>
                    </div>
                  </div>

                  <div className="master-card-footer">
                    <p className="master-catalog-desc">{order.desc}</p>
                    <div className="master-tags">
                      {order.tags && order.tags.map((tag: string, i: number) => (
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