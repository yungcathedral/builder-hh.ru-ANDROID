import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function SpecialistProfile() {
  const { id } = useParams<{ id: string }>(); 
  const [master, setMaster] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchMasterData = async () => {
      try {
        setLoading(true);
        if (!id) return;

        const docRef = doc(db, 'specialists', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMaster({
            id: docSnap.id,
            name: data.name || 'Без имени',
            title: data.title || 'Специалист',
            category: data.category || 'other',
            rating: Number(data.rating) || 0,
            price: Number(data.price) || 0,
            experience: data.experience || data.expirience || 'Опыт не указан',
            desc: data.desc || '',
            avatar: data.avatar || (data.name ? data.name.split(' ').map((n: string) => n[0]).join('') : '??'),
            badges: data.badges || [],
            tags: data.tags || [],
            reviews: Number(data.reviews) || 0
          });
        } else {
          console.error('Мастер не найден в Firebase');
        }
      } catch (error) {
        console.error('Ошибка загрузки профиля мастера из Firebase:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMasterData();
  }, [id]);

  const handleSendResponse = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ваше сообщение для ${master?.name} успешно отправлено!`);
    setModalOpen(false);
    setMessage('');
  };

  if (loading) {
    return <div className="catalog-container"><h2>Загрузка профиля мастера...</h2></div>;
  }

  if (!master) {
    return (
      <div className="catalog-container">
        <h2>Мастер не найден</h2>
        <Link to="/specialists" className="btn-view-profile" style={{ display: 'inline-block', marginTop: '16px' }}>
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="catalog-container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <Link to="/specialists" style={{ display: 'inline-block', marginBottom: '24px', color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>
        ← Вернуться в каталог
      </Link>

      <div className="specialist-card" style={{ display: 'flex', flexDirection: 'column', gap: '32px', cursor: 'default' }}>
        <div className="specialist-main-info" style={{ justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div className="specialist-avatar" style={{ width: '80px', height: '80px', fontSize: '28px' }}>
              {master.avatar}
            </div>
            <div className="specialist-meta">
              <div className="specialist-name-row">
                <h1 style={{ fontSize: '28px', margin: 0, color: 'var(--color-dark)', fontWeight: 700 }}>{master.name}</h1>
                {master.badges && master.badges.map((b: string, i: number) => (
                  <span key={i} className={`badge badge-${b.toLowerCase()}`}>{b}</span>
                ))}
              </div>
              <p className="specialist-title" style={{ fontSize: '16px', marginTop: '4px' }}>{master.title}</p>
              <div className="specialist-stats" style={{ marginTop: '8px' }}>
                <span className="stat-rating" style={{ fontSize: '15px' }}>★ {master.rating}</span>
                <span className="stat-reviews" style={{ fontSize: '15px' }}> ({master.reviews} отзывов)</span>
                <span className="stat-experience" style={{ fontSize: '15px' }}> {master.experience}</span>
              </div>
            </div>
          </div>

          <div className="specialist-price-section" style={{ border: 'none', padding: 0, background: 'transparent' }}>
            <div className="price-block" style={{ textAlign: 'right', marginBottom: '12px' }}>
              <span className="price-label">Стоимость работ: </span>
              <span className="price-amount" style={{ fontSize: '24px' }}>{master.price} ₽/ч</span>
            </div>
            <button className="btn-view-profile" style={{ width: '100%', padding: '12px 24px' }} onClick={() => setModalOpen(true)}>
              Связаться с мастером
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
          <h3 style={{ fontSize: '18px', margin: '0 0 12px 0', color: 'var(--color-dark)' }}>О мастере</h3>
          <p className="master-catalog-desc" style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569' }}>{master.desc}</p>
          
          
        </div>
      </div>

      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div className="auth-card" style={{ maxWidth: '500px', width: '100%', background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div className="auth-header-block" style={{ marginBottom: '20px' }}>
              <h3>Форма отклика</h3>
              <p>Напишите мастеру, какую задачу необходимо выполнить</p>
            </div>
            <form onSubmit={handleSendResponse} className="auth-form">
              <div className="form-group">
                <label>Ваше предложение</label>
                <textarea 
                  rows={4} 
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                  placeholder="Опишите детали проекта и ваши контакты..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button type="submit" className="btn-auth-submit" style={{ margin: 0, flex: 1 }}>Отправить</button>
                <button 
                  type="button" 
                  className="btn-order" 
                  style={{ flex: 1, border: '1px solid #cbd5e1', color: '#64748b', background: '#fff', borderRadius: '8px' }}
                  onClick={() => setModalOpen(false)}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}