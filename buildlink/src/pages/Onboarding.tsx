import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [userRole, setUserRole] = useState('');
  const [projectType, setProjectType] = useState('');
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Профиль успешно настроен! Добро пожаловать.');
      navigate('/orders');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card text-center" style={{ minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        <div className="onboarding-steps-bar" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '4px', backgroundColor: currentStep >= 1 ? 'var(--color-orange)' : '#e2e8f0', borderRadius: '2px' }}></div>
          <div style={{ width: '40px', height: '4px', backgroundColor: currentStep >= 2 ? 'var(--color-orange)' : '#e2e8f0', borderRadius: '2px' }}></div>
          <div style={{ width: '40px', height: '4px', backgroundColor: currentStep >= 3 ? 'var(--color-orange)' : '#e2e8f0', borderRadius: '2px' }}></div>
        </div>

        {currentStep === 1 && (
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Кто вы на BuildLink?</h1>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>Выберите ваш статус для правильной настройки личного кабинета</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                className={`btn-outline-white ${userRole === 'private' ? 'active-onboard' : ''}`}
                style={{ color: '#1e293b', borderColor: userRole === 'private' ? 'var(--color-orange)' : '#cbd5e1', textAlign: 'left', padding: '14px' }}
                onClick={() => setUserRole('private')}
              >
                Частное лицо (нужен ремонт себе)
              </button>
              <button 
                className={`btn-outline-white ${userRole === 'business' ? 'active-onboard' : ''}`}
                style={{ color: '#1e293b', borderColor: userRole === 'business' ? 'var(--color-orange)' : '#cbd5e1', textAlign: 'left', padding: '14px' }}
                onClick={() => setUserRole('business')}
              >
                Представитель бизнеса / Прораб
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Какой у вас проект?</h1>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>Это поможет рекомендовать мастеров с подходящим опытом</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                className={`btn-outline-white ${projectType === 'small' ? 'active-onboard' : ''}`}
                style={{ color: '#1e293b', borderColor: projectType === 'small' ? 'var(--color-orange)' : '#cbd5e1', textAlign: 'left', padding: '14px' }}
                onClick={() => setProjectType('small')}
              >
                Мелкий бытовой ремонт (замена крана, розеток)
              </button>
              <button 
                className={`btn-outline-white ${projectType === 'large' ? 'active-onboard' : ''}`}
                style={{ color: '#1e293b', borderColor: projectType === 'large' ? 'var(--color-orange)' : '#cbd5e1', textAlign: 'left', padding: '14px' }}
                onClick={() => setProjectType('large')}
              >
                Капитальный ремонт или строительство дома
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>Всё готово к старту!</h1>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px', lineHeight: 1.5 }}>
              Мы настроили ленту под ваши задачи. Теперь вы можете опубликовать свой первый заказ или самостоятельно выбрать проверенного мастера из каталога.
            </p>
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '8px', fontSize: '12px', color: '#475569', textAlign: 'left' }}>
              Вы всегда сможете изменить параметры подбора в настройках своего профиля.
            </div>
          </div>
        )}

        <button 
          className="btn-auth-submit" 
          onClick={handleNextStep}
          disabled={currentStep === 1 && !userRole || currentStep === 2 && !projectType}
          style={{ 
            marginTop: '24px',
            opacity: (currentStep === 1 && !userRole || currentStep === 2 && !projectType) ? 0.5 : 1,
            cursor: (currentStep === 1 && !userRole || currentStep === 2 && !projectType) ? 'not-allowed' : 'pointer'
          }}
        >
          {currentStep === 3 ? 'Перейти в личный кабинет' : 'Далее →'}
        </button>

      </div>
    </div>
  );
}
