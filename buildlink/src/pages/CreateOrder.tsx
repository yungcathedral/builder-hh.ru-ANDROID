import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateOrder() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('renovation');
  const [budget, setBudget] = useState('');
  const [desc, setDesc] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заказ успешно опубликован в каталоге!');
    navigate('/orders');
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '550px' }}>
        <div className="auth-header-block">
          <h1>Разместить заказ</h1>
          <p>Опишите вашу строительную или ремонтную задачу, чтобы получить отклики от мастеров</p>
        </div>
        <form onSubmit={handleCreate} className="auth-form">
          <div className="form-group">
            <label>Что нужно сделать? (Краткое название)</label>
            <input type="text" placeholder="Например: Положить плитку на кухне 10 кв.м." value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Категория работ</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="electricity">Электрика и освещение</option>
              <option value="plumbing">Сантехника и отопление</option>
              <option value="renovation">Ремонт под ключ</option>
              <option value="painting">Малярные и отделочные работы</option>
            </select>
          </div>
          <div className="form-group">
            <label>Бюджет (₽)</label>
            <input type="number" placeholder="Укажите стоимость или оставьте пустым" value={budget} onChange={(e) => setBudget(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Подробное описание требований и сроков</label>
            <textarea rows={5} style={{ width: '100%', padding: '10px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} placeholder="Опишите объём работ, наличие материалов и особые пожелания..." value={desc} onChange={(e) => setDesc(e.target.value)} required />
          </div>
          <button type="submit" className="btn-auth-submit">Опубликовать заказ</button>
        </form>
      </div>
    </div>
  );
}
