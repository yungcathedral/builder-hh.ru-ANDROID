import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase'; 
import { doc, getDoc } from 'firebase/firestore';

export default function OrderPage() {
  const { id } = useParams<{ id: string }>(); 
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setLoading(true);
        if (!id) return;

        const docRef = doc(db, 'orders', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setOrder({
            id: docSnap.id,
            title: data.title || 'Новый заказ',
            category: data.category || 'other',
            budget: Number(data.budget) || 0,
            location: data.location || 'Город не указан',
            date: data.date || 'Недавно',
            desc: data.desc || '',
            tags: data.tags || []
          });
        }
      } catch (error) {
        console.error('Ошибка загрузки заказа:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [id]);

  if (loading) {
    return <div className="catalog-container"><h2>Загрузка деталей заказа...</h2></div>;
  }

  if (!order) {
    return (
      <div className="catalog-container">
        <h2>Заказ не найден</h2>
        <Link to="/orders" className="btn-back">← Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className="catalog-container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Link to="/orders" className="btn-back">
        ← Вернуться в каталог
      </Link>

      <div className="specialist-profile-card">
        <div className="details-header">
          <div className="specialist-main-info">
            <div className="specialist-meta">
              <div className="specialist-name-row">
                <h2>{order.title}</h2>
              </div>
              <p className="specialist-title" style={{ margin: '4px 0', color: '#64748b' }}>
                Категория: {order.category === 'electricity' ? 'Электрика' : order.category === 'plumbing' ? 'Сантехника' : order.category === 'renovation' ? 'Ремонт' : 'Разное'}
              </p>
              <div className="specialist-stats" style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
                <span className="stat-experience">{order.location}</span>
                <span className="stat-reviews">{order.date}</span>
              </div>
            </div>
          </div>

          <div className="specialist-price-section">
            <div className="price-block" style={{ textAlign: 'right', marginBottom: '12px' }}>
              <span className="price-label">Бюджет проекта: </span>
              <span className="price-amount" style={{ fontSize: '24px' }}>
                {order.budget ? `${order.budget.toLocaleString()} ₽` : 'Договорная'}
              </span>
            </div>
            <button 
              className="btn-view-profile" 
              style={{ width: '100%', padding: '12px 24px', border: 'none' }} 
              onClick={() => alert('Вы успешно откликнулись на заказ!')}
            >
              Откликнуться
            </button>
          </div>
        </div>

        <div className="details-body" style={{ marginTop: '32px', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--color-dark)' }}>Описание задачи</h3>
          <p className="description-text" style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569' }}>
            {order.desc}
          </p>
          
          <h3 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', color: 'var(--color-dark)' }}>Требуемые навыки</h3>
          <div className="specialist-tags">
            {order.tags && order.tags.map((tag: string, i: number) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}