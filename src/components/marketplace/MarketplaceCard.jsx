import { useNavigate } from 'react-router-dom'

//Assets
import viwersIcon from '@/assets/icons/viewers.png'
import clockIcon from '@/assets/icons/clock.png'

export function MarketplaceCard({
  image,
  name,
  description,
  city,
  country,
  progress,
  limit,
  projection,
  projectedReturn,
  reference,
  type,
  daysLeft,
  endDate,
  views,
  id
}) {
  const navigate = useNavigate()

  return (
    <article className="project-card">
      <header className="card-header">
        <img src={image} alt={`Preview for ${name}`} className="card-image" />
        <div className="badge"><span/> <p>Abierto</p></div>
        <div className="views" aria-label="View count">
          <img src={viwersIcon} className='viwers-icon' alt="View icon" />
          <span>{views} lo han visto</span>
        </div>
      </header>

      <section className="card-body">
        <div className="title-area">
          <div>
            <h3>{name}</h3>
            <p className="screen-desc">{description}</p>
          </div>
          <div className="progress-quantity">
            <span className="pixel-selled">{progress}</span>
            <span className="pixel-progress">/{limit}</span>
            <div>
              <p>Pixeles Disponibles</p>
            </div>
          </div>
        </div>

        

        <ul className="tags">
          <li className="tag">Ref: {reference}</li>
          <li className="tag">{type}</li>
        </ul>

        <span className="tag location">
          <p>{city}</p>
          <p>, {country}</p>
        </span>

        <ul className="info-list">
          <li>
            <strong>Proyección ROI:</strong> {projection}
          </li>
          <li>
            <strong>Ingreso trimestral:</strong> {projectedReturn}
          </li>
          <li className="date-info">
            <img src={clockIcon} alt="Calendar icon" />
            <span>Quedan {daysLeft} días (Cierra el {endDate})</span>
          </li>
        </ul>

        <button
          className="buy-button"
          onClick={() => navigate(`/screen-details/${id}`)}
        >
          Comprar Pixel en este Proyecto →
        </button>
      </section>
    </article>
  )
}
