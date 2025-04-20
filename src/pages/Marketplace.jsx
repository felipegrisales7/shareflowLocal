import '@/styles/Marketplace.css'

//Assets
import place1 from '@/assets/images/place1.png'
import place2 from '@/assets/images/place2.png' 
import place3 from '@/assets/images/place3.png'
import place4 from '@/assets/images/place4.png'
import { MarketplaceCard } from '../components/marketplace/MarketplaceCard'
import { Simulator } from '../components/marketplace/Simulator'

export function Marketplace() {
  const places = [
    {
      id: 1,
      name: 'Hotel 10 Medellín',
      image: place1,
      description: 'Pantalla · 120m²',
      city: 'Medellín',
      country: 'Colombia',
      progress: '15',
      limit: '50',
      projection: '22.6% EA (variable)',
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
      city: 'Medellín',
      country: 'Colombia',
      progress: '15',
      limit: '50',
      projection: '22.6% EA (variable)',
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
      city: 'Medellín',
      country: 'Colombia',
      progress: '15',
      limit: '50',
      projection: '22.6% EA (variable)',
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
      city: 'Medellín',
      country: 'Colombia',
      progress: '15',
      limit: '50',
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
      <Simulator />

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
