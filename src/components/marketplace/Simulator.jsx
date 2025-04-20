import mockup from '@/assets/images/phone_preview.png'
import '@/styles/Marketplace.css'

export function Simulator() {
  return (
    <article className="simulator">
      <figure className="simulator-image">
        <img src={mockup} alt="Phone mockup" />
      </figure>

      <section className="simulator-form">
        <h2 className="simulator-title">SIMULA EL RENDIMIENTO DE TU PIXEL</h2>

        <form className="simulator-inputs">
          
          <div>
          <span className="simulator-range-label">En que proyecto quisieras participar?</span>
            <select aria-label="Seleccionar proyecto">
                <option>Seleccionar proyecto</option>
            </select>
          </div>
          <div>
          <span className="simulator-range-label">En cuantos meses quisieras pagar?</span>
            <select aria-label="Seleccionar cuotas">
                <option>Cuotas</option>
            </select>
          </div>
          

          <div className="simulator-range-wrapper">
            <strong>$10,000,000</strong> <span>1 pixel</span>
            <input
                type="range"
                min="1"
                max="50"
                step="1"
                defaultValue="10"
                className="simulator-range"
            />
          <span className="simulator-range-label">¿Cuánto quieres invertir en total?</span>
          </div>
        </form>

        <div className="simulator-footer">  
          <button type="button">Calcular Retorno</button>
        </div>
      </section>
    </article>
  )
}
