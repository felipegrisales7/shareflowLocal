import { useNavigate, useParams } from 'react-router-dom'
import '@/styles/ScreenDetails.css'

export function ScreenDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <main className="screen-details-container">
      <section className="screen-main">
        <div className="screen-gallery">
          <img
            className="main-image"
            src="/images/project-main.jpg"
            alt="Main display preview"
          />
          <div className="thumbnails">
            <img src="/images/project-thumb1.jpg" alt="Preview 1" />
            <img src="/images/project-thumb2.jpg" alt="Preview 2" />
            <img src="/images/project-thumb3.jpg" alt="Preview 3" />
            <img src="/images/project-thumb4.jpg" alt="Preview 4" />
          </div>
        </div>
        <aside className="screen-simulator">
        <section className="simulator-card">
          <h3>SIMULA EL RENDIMIENTO DE TU PIXEL</h3>
          <form>
            <label>
              En qué proyecto quisieras participar?
              <select>
                <option>Seleccionar proyecto</option>
              </select>
            </label>
            <label>
              En cuántos meses quisieras pagar?
              <select>
                <option>Cuotas</option>
              </select>
            </label>
            <div className="simulator-price">
              <strong>$10,000,000</strong>
              <span>1 pixel</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              defaultValue="1"
              aria-label="Cantidad de inversión"
            />
            <p className="range-label">¿Cuánto quieres invertir en total?</p>
            <button type="submit">Calcular Retorno →</button>
          </form>
        </section>
      </aside>
    </section>

      <section className="screen-tabs">
      <div className="screen-overview">
          <p className="section-label">Proyecto</p>
          <h1 className="screen-title">Parque Débora Arango</h1>
          <p className="screen-description">
            Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
          </p>

          <ul className="screen-tags">
            <li className="tag">Ref: SFS001_MDE</li>
            <li className="tag">Medellín, Colombia</li>
            <li className="tag">Pantalla LED Exterior</li>
          </ul>

          <div className="screen-data">
            <div>
              <p className="price-label">Tu píxel por solo</p>
              <p className="price-value">$10.000.000</p>
            </div>
            <p className="availability">23 <span>/42</span> Pixeles Disponibles</p>
          </div>

          <button 
            className="cta-button"
            onClick={() => navigate(`/project-details/${id}`)} 
          >
            Quiero hacer parte <span>→</span>
          </button>
        </div>
        <nav className="tab-menu">
          <button className="active">Acerca de la inversión</button>
          <button>¿Dónde está ubicado?</button>
          <button>Líneas de negocio</button>
          <button>Equipo del proyecto</button>
          <button>Beneficios</button>
        </nav>
        <div className="tab-content">
          <h2>Ubicación estratégica:</h2>
          <p>
            Esta pantalla estará ubicada en el corazón de Envigado, sobre la vía principal que conecta el Parque Débora Arango, el colegio José Manuel Restrepo Vélez (JOMAR) y el Centro Comercial Viva Envigado, uno de los más transitados del sur del Valle de Aburrá.
          </p>
        </div>
      </section>

      
    </main>
  )
}
