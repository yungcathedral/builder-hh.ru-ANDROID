export default function Stats() {
  const stats = [
    { icon: "👥", count: "15,000+", label: "Проверенных мастеров" },
    { icon: "📋", count: "42,000+", label: "Выполненных заказов" },
    { icon: "🛡️", count: "100%", label: "Гарантия качества" }
  ];

  return (
    <div className="stats-container">
      {stats.map((item, idx) => (
        <div key={idx} className="stat-card">
          <div className="stat-icon">{item.icon}</div>
          <div>
            <div className="stat-count">{item.count}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}