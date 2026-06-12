export default function Banner() {
  return (
    <section className="hero-section">
      <h1>Найдите лучших мастеров для вашего проекта</h1>
      <p>От мелкого ремонта до капитального строительства. Проверенные специалисты и безопасные сделки.</p>

      <div className="search-form-container">
        <div className="search-input-group">
          <input type="text" placeholder="Специалист" />
        </div>
        <div className="search-input-group">
          <input type="text" placeholder="Город" />
        </div>
        <button className="btn-find">Найти специалиста</button>
        <button className="btn-order">Разместить объявление</button>
      </div>
    </section>
  );
}