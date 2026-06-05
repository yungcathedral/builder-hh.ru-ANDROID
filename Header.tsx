import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="logo">BuildLink</Link>

        <nav className="nav-links">
          <Link to="/specialists">Каталог специалистов</Link>
          <Link to="/orders">Каталог заказов</Link>
        </nav>
      </div>
      
      <div className="header-search">
        <input type="text" placeholder="Поиск услуг..." />
      </div>

      <div className="header-actions">
        <button className="btn-bell">Уведомления</button>
        <Link to="/register-business" className="btn-login">Войти</Link>
      </div>
    </header>
  );
}
