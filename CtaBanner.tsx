export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <div className="cta-left">
          <h2>Готовы начать свой проект?</h2>
          <p>Разместите заказ и получите первые предложения от мастеров уже через 15 минут.</p>
          <div className="cta-buttons">
            <button className="btn-white">Опубликовать заказ</button>
            <button className="btn-outline-white">Как это работает?</button>
          </div>
        </div>

        {/* <div className="cta-right-pro">
          <div className="pro-title">BuildLink Pro</div>
          <div className="pro-subtitle">Для профессионалов</div>
          <p className="pro-text">Получайте больше заказов и развивайте свой бизнес вместе с нами.</p>
          <a href="#" className="pro-link">Стать партнером →</a>
        </div> */}
      </div>
    </section>
  );
}
