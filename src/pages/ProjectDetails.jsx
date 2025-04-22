import '@/styles/ProjectDetails.css'
import { PixelGrid } from '../components/marketplace/PixelGrid'
import { useNavigate } from 'react-router-dom'

export function ProjectDetails() {
  const navigate = useNavigate()

  return (
      <main className="project-details">
      <header className="project-header">
        <div>
          <p className="section-label">Proyecto</p>
          <h1 className="project-title">Parque Débora Arango</h1>
          <p className="project-description">
              Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
          </p>
          <ul className="project-tags">
            <li className="tag">Ref: SFS001_MDE</li>
            <li className="tag">Medellín, Colombia</li>
            <li className="tag">Pantalla LED Exterior</li>
          </ul>
          <p className="project-price">$10.000.000</p>
        </div>
        <div className="availability-box">
          <span className='availability-count'><p>23</p> <p>/42</p></span>
          <p className="availability-label">Pixeles Disponibles</p>
        </div>
      </header>

      <section className="project-actions">
        <div className="pixel-selector">
          <h3><span className="step-number">1</span> ¿Cuántos pixeles deseas?</h3>
          <p className="selector-label">Selecciona la cantidad de pixeles</p>
          <div className="selector-controls">
              <button className="control-btn">-</button>
              <span className="pixel-count">2</span>
              <button className="control-btn">+</button>
          </div>
          <button
              className="continue-btn"
              onClick={() => navigate(`/identity-verification`)} // Replace with the actual path to the next step
          >
              Continuar →
          </button>
        </div>

        <div className="pixel-grid">
        <h3><span className="step-number">2</span> Selecciona tu pixel preferido</h3>
        <div className="screen-image">
            <PixelGrid rows={6} cols={9} soldPixels={[3, 14, 20]} />
        </div>
        </div>
      </section>
    </main>
  )
}
