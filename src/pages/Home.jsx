import '@/styles/Home.css'

//Assets
import step1 from '@/assets/step1.png'
import step2 from '@/assets/step2.png'
import step3 from '@/assets/step3.png'

export function Home() {
  const progress = 60

  const items = [
    {
      id: 1,
      title: 'Completa tu perfil',
      description:
        'Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
      image: step1,
      action: 'Completar mi perfil',
    },
    {
      id: 2,
      title: 'Visita el marketplace',
      description:
        'Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
      image: step2,
      action: 'Ir al marketplace',
    },
    {
      id: 3,
      title: 'Selecciona tu proyecto y la cantidad de pixeles',
      description:
        'Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
      image: step3,
      action: 'Seleccionar proyecto',
    },
  ]

  return (
    <div className="home-container">
      <h2 className="home-title">
        Hola Juan Felipe, <br />
        <strong>¿Estás listo para comprar tu primer pixel?</strong> ✨
      </h2>
      <p className="home-subtitle">
        Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
      </p>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <span className="progress-label">{progress}% Completado</span>
      </div>

      <div className="steps">
        {items.map((item) => (
          <div key={item.id} className="step-card">
            <img src={item.image} alt={item.title} />
            <div className="step-content">
              <h3>{item.id}. {item.title}</h3>
              <p>{item.description}</p>
            </div>
            <button className="step-button">{item.action}</button>
          </div>
        ))}
      </div>
    </div>
  )
}
