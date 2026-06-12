import { useState } from 'react';

export default function Dashboard() {
  const [user] = useState({
    name: "Константин Александров",
    role: "Заказчик",
    email: "konstantin@buildlink.ru",
    phone: "+7 (999) 123-45-67"
  });

  return (
    <div className="catalog-container">
      <div className="catalog-header" style={{ marginBottom: '24px' }}>
        <div className="catalog-title-block">
          <h1>Личный кабинет</h1>
          <p>Добро пожаловать в панель управления профилем BuildLink</p>
        </div>
      </div>

      <div className="catalog-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        <div className="catalog-master-card" style={{ padding: '24px' }}>
          <div className="master-card-main">
            <div className="master-card-left">
              <div className="catalog-avatar" style={{ width: '64px', height: '64px', fontSize: '20px' }}>
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="master-meta">
                <h2>{user.name}</h2>
                <p className="master-spec-title" style={{ color: 'var(--color-orange)', fontWeight: 600 }}>{user.role}</p>
                <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0 0' }}>
                  {user.email} • {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div className="stat-card" style={{ flex: '1 1 calc(50% - 12px)', margin: 0, padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div className="stat-icon" style={{ fontSize: '24px' }}>🔔</div>
            <div>
              <div className="stat-count" style={{ fontSize: '24px', fontWeight: 700 }}>2</div>
              <div className="stat-label" style={{ fontSize: '14px', color: '#64748b' }}>Новых отклика</div>
            </div>
          </div>
          
          <div className="stat-card" style={{ flex: '1 1 calc(50% - 12px)', margin: 0, padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div className="stat-icon" style={{ fontSize: '24px' }}>📋</div>
            <div>
              <div className="stat-count" style={{ fontSize: '24px', fontWeight: 700 }}>1</div>
              <div className="stat-label" style={{ fontSize: '14px', color: '#64748b' }}>Активный проект</div>
            </div>
          </div>
        </div>

        <div className="catalog-master-card" style={{ padding: '24px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 700 }}>Мои последние действия</h3>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
            История ваших заказов и взаимодействий пуста.
          </p>
        </div>

      </div>
    </div>
  );
}