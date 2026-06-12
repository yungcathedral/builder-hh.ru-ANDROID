export default function Specialists() {
  const specialists = [
    {
      id: 1,
      name: "Алексей Петров",
      title: "Специалист по электрике",
      category: "electricity",
      rating: 4.9,
      badges: ["PRO"],
      reviews: 24,
      price: 1500,
      experience: "Опыт 5 лет",
      avatar: "АП",
      tags: ["Электропроводка", "Освещение"],
      desc: "Монтаж электропроводки любой сложности в квартирах и частных домах"
    },

     {
      id: 2,
      name: "Марина Волкова",
      title: "Маляр-декоратор",
      category: "painting",
      rating: 5.0,
      badges: ["VERIFIED"],
      reviews: 42,
      price: 1200,
      experience: "Опыт 8 лет",
      avatar: "МВ",
      tags: ["Покраска", "Декор", "Обои"],
      desc: "Профессиональная покраска стен и декоративная штукатурка. Помогаю с подбором материалов."
    },
    
     {
      id: 3,
      name: "Иван Сергеев",
      title: "Сантехник",
      category: "plumbing",
      rating: 4.8,
      badges: ["EXPERT"],
      reviews: 19,
      price: 1800,
      experience: "Опыт 6 лет",
      avatar: "ИС",
      tags: ["Сантехника", "Бойлеры", "Ремонт"],
      desc: "Все виды сантехнических работ: от замены смесителя до разводки труб и установки отопления."
    }
  ];

  return (
    <section className="section-wrapper">
      <div className="section-header">
        <h2>Рекомендованные специалисты</h2>
        <p>Мастера с высоким рейтингом и отзывами</p>
      </div>

      <div className="cards-grid">
        {specialists.map((master, idx) => (
          <div key={idx} className="master-card">
            <div>
              <div className="card-top">
                <div className="master-info">
                  <div className="master-avatar">{master.name[0]}</div>
                  <div>
                    <h3 className="master-name">{master.name}</h3>
                    <p className="master-title">{master.title}</p>
                    <div className="badges-row">
                      {master.badges.map((b, i) => (
                        <span key={i} className="badge">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rating">★ {master.rating}</div>
              </div>
              <p className="master-desc">{master.desc}</p>
              <div className="tags-row">
                {master.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <button className="btn-contact">Связаться с мастером</button>
          </div>
        ))}
      </div>
    </section>
  );
}