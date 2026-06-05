export default function Categories() {
  const categories = [
    { icon: "🎨", name: "Интерьер" },
    { icon: "⚡", name: "Электрика" },
    { icon: "🔧", name: "Сантехника" },
    { icon: "🔨", name: "Ремонт" },
    { icon: "🧱", name: "Отделка стен" },
    { icon: "🏠", name: "Кровля" }
  ];

  return (
    <section className="categories-section">
      <div className="categories-top">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <h2>Популярные категории</h2>
          <p>Выберите направление работ</p>
        </div>
        <a href="#" className="link-all">Смотреть все</a>
      </div>

      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}