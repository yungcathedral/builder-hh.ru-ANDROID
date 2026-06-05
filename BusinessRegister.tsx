// import { useState } from 'react';

// export default function BusinessRegister() {
//   const [companyName, setCompanyName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [category, setCategory] = useState('electricity');
//   const [city, setCity] = useState('');
//   const [agree, setAgree] = useState(false);

//   import { useNavigate } from 'react-router-dom';

// export default function BusinessRegister() {
//   // Добавь инициализацию хука внутри компонента:
//   const navigate = useNavigate();

//   const [companyName, setCompanyName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [category, setCategory] = useState('electricity');
//   const [city, setCity] = useState('');
//   const [agree, setAgree] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!agree) {
//       alert('Пожалуйста, примите условия пользовательского соглашения');
//       return;
//     }
    
//     console.log('Бизнес зарегистрирован:', { companyName, phone, category, city });
    
//     // ЭТА СТРОЧКА ДЕЛАЕТ МАГИЮ: перенаправляет на онбординг
//     navigate('/onboarding'); 
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header-block">
//           <h1>Бизнес-аккаунт BuildLink</h1>
//           <p>Зарегистрируйтесь как компания или частный мастер, чтобы находить клиентов и получать заказы</p>
//         </div>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label>Название компании или Ваше Имя</label>
//             <input 
//               type="text" 
//               placeholder="ООО СтройМастер или Иван Иванов" 
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Номер телефона для связи</label>
//             <input 
//               type="tel" 
//               placeholder="+7 (999) 999-99-99" 
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Основное направление работ</label>
//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//               <option value="electricity">Электрика и освещение</option>
//               <option value="plumbing">Сантехника и отопление</option>
//               <option value="renovation">Ремонт под ключ</option>
//               <option value="painting">Малярные и отделочные работы</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Город работы</label>
//             <input 
//               type="text" 
//               placeholder="Ижевск" 
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-checkbox">
//             <label>
//               <input 
//                 type="checkbox" 
//                 checked={agree}
//                 onChange={(e) => setAgree(e.target.checked)}
//               />
//               <span>Я принимаю условия <a href="#">Пользовательского соглашения</a> и политики конфиденциальности</span>
//             </label>
//           </div>

//           <button type="submit" className="btn-auth-submit">
//             Создать бизнес-профиль
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


import { useState } from 'react';
// Все импорты теперь строго на своем месте — в самом верху файла
import { useNavigate } from 'react-router-dom';

export default function BusinessRegister() {
  const navigate = useNavigate();

  // Состояния для полей формы (объявлены строго один раз)
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('electricity');
  const [city, setCity] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert('Пожалуйста, примите условия пользовательского соглашения');
      return;
    }
    
    console.log('Бизнес зарегистрирован:', { companyName, phone, category, city });
    
    // Перенаправляем пользователя на онбординг
    navigate('/onboarding'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header-block">
          <h1>Бизнес-аккаунт BuildLink</h1>
          <p>Зарегистрируйтесь как компания или частный мастер, чтобы находить клиентов и получать заказы</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Название компании или Ваше Имя</label>
            <input 
              type="text" 
              placeholder="ООО или Фамилия Отчество" 
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Номер телефона для связи</label>
            <input 
              type="tel" 
              placeholder="Ваш номер телефона" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Основное направление работ</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="electricity">Электрика и освещение</option>
              <option value="plumbing">Сантехника и отопление</option>
              <option value="renovation">Ремонт под ключ</option>
              <option value="painting">Малярные и отделочные работы</option>
            </select>
          </div>

          <div className="form-group">
            <label>Город работы</label>
            <input 
              type="text" 
              placeholder="Ижевск" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="form-checkbox">
            <label>
              <input 
                type="checkbox" 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>Я принимаю условия <a href="#">Пользовательского соглашения</a> и политики конфиденциальности</span>
            </label>
          </div>

          <button type="submit" className="btn-auth-submit">
            Создать бизнес-профиль
          </button>
        </form>
      </div>
    </div>
  );
}

