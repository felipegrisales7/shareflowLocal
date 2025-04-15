import '@/styles/Marketplace.css'

import mockup from '@/assets/phone_preview.png'
import place1 from '@/assets/place1.png'
import place2 from '@/assets/place2.png'
import place3 from '@/assets/place3.png'
import place4 from '@/assets/place4.png'
import { MarketplaceCard } from '../components/marketplace/MarketplaceCard'

export function Marketplace() {
  const places = [
    {
      id: 1,
      name: 'Hotel 10 Medellín',
      image: place1,
      description: 'Pantalla · 120m²',
      city: 'Medellín, Colombia',
      progress: '15/50',
      projection: '22.6% EA (variable)',
      minPrice: '$875.000',
      projectedReturn: '$1.072.500',
      reference: 'SFS001_MDE',
      type: 'Pantalla LED Exterior',
      daysLeft: 17,
      endDate: '7 de abril de 2025',
      views: 631,
    },
    {
      id: 2,
      name: 'Hotel 10 Medellín',
      image: place2,
      description: 'Pantalla · 120m²',
      city: 'Medellín, Colombia',
      progress: '15/50',
      projection: '22.6% EA (variable)',
      minPrice: '$875.000',
      projectedReturn: '$1.072.500',
      reference: 'SFS001_MDE',
      type: 'Pantalla LED Exterior',
      daysLeft: 17,
      endDate: '7 de abril de 2025',
      views: 631,
    },
    {
      id: 3,
      name: 'Hotel 10 Medellín',
      image: place3,
      description: 'Pantalla · 120m²',
      city: 'Medellín, Colombia',
      progress: '15/50',
      projection: '22.6% EA (variable)',
      minPrice: '$875.000',
      projectedReturn: '$1.072.500',
      reference: 'SFS001_MDE',
      type: 'Pantalla LED Exterior',
      daysLeft: 17,
      endDate: '7 de abril de 2025',
      views: 631,
    },
    {
      id: 4,
      name: 'Hotel 10 Medellín',
      image: place4,
      description: 'Pantalla · 120m²',
      city: 'Medellín, Colombia',
      progress: '15/50',
      projection: '22.6% EA (variable)',
      minPrice: '$875.000',
      projectedReturn: '$1.072.500',
      reference: 'SFS001_MDE',
      type: 'Pantalla LED Exterior',
      daysLeft: 17,
      endDate: '7 de abril de 2025',
      views: 631,
    },
  ]

  return (
    <main className="marketplace-container">
      <section className="simulator">
        <figure className="simulator-left">
          <img src={mockup} alt="Phone mockup" />
        </figure>
        <section className="simulator-right">
          <h2>SIMULA EL RENDIMIENTO DE TU PIXEL</h2>
          <form className="simulator-inputs">
            <select aria-label="Seleccionar proyecto">
              <option>Seleccionar proyecto</option>
            </select>
            <select aria-label="Seleccionar cuotas">
              <option>Cuotas</option>
            </select>
            <input type="number" placeholder="¿Cuánto quieres invertir?" aria-label="Monto a invertir" />
          </form>
          <div className="simulator-footer">
            <p><strong>$10,000,000</strong> <span>1 pixel</span></p>
            <button type="button">Calcular Retorno</button>
          </div>
        </section>
      </section>

      <section className="trending-projects">
        <header className="projects-header">
          <h3>Proyectos Trending</h3>
          <a href="#">Ver todos →</a>
        </header>

        <section className="projects-grid">
          {places.map((place) => (
            <MarketplaceCard key={place.id} {...place} />
          ))}
        </section>
      </section>
    </main>
  )
}
