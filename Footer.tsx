export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">BuildLink</div>
          <p>Ваш надежный партнер в мире строительства и ремонта. Найдем мастера для любой задачи.</p>
          {/* <div className="footer-socials">
            <a href="#">🌐</a>
            <a href="#">💬</a>
          </div> */}
        </div>

        <div className="footer-col">
          <h4>КОМПАНИЯ</h4>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Поддержка</a></li>
            <li><a href="#">Юридическая информация</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>УСЛУГИ</h4>
          <ul>
            <li><a href="#">Каталог Специалистов</a></li>
            <li><a href="#">Каталог Заказов</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
            <li><a href="#">Условия пользования</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ПРИЛОЖЕНИЕ</h4>
          <p className="app-text">Скачайте мобильное приложение для быстрого доступа.</p>
          <div className="store-buttons">
            <button className="btn-store">App Store</button>
            <button className="btn-store">Google Play</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 BuildLink</div>
        <div className="footer-meta">
          <span>Ижевск</span>
        </div>
      </div>
    </footer>
  );
}
