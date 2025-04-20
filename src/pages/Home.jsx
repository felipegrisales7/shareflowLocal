import '@/styles/Home.css'

//Assets
import step1 from '@/assets/step1.png'
import step2 from '@/assets/step2.png'
import step3 from '@/assets/step3.png'

//Components
import { StepCard } from '@/components/home/StepCard'

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
      url: '/profile',
    },
    {
      id: 2,
      title: 'Visita el marketplace',
      description:
        'Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
      image: step2,
      action: 'Ir al marketplace',
      url: '/marketplace',
    },
    {
      id: 3,
      title: 'Selecciona tu proyecto y la cantidad de pixeles',
      description:
        'Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.',
      image: step3,
      action: 'Seleccionar proyecto',
      url: '/projects',
    },
  ]

  return (
    <article className="home-container">
      {/****** UserName *******/}
      <section className="title-section">
        <p>Hola Juan Felipe,</p> 
        <h2><strong>¿Estás listo para comprar tu primer pixel?</strong> ✨</h2>
        <p className="home-subtitle">
          Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
        </p>
      </section>
      {/****** UserProgress *******/}
      <section className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <span className="progress-label">{progress}% Completado</span>
      </section>

      <div className="steps">
        {items.map((item) => (
          <StepCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            actionLabel={item.action}
            onClick={() => window.location.href = item.url}
          />
        ))}
      </div>
    </article>
  )
}
