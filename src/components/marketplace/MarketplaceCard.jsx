import { useNavigate } from 'react-router-dom'

export function MarketplaceCard({
    image,
    name,
    description,
    city,
    progress,
    projection,
    minPrice,
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
          <img src={image} alt={`Preview for ${name}`} />
          <span className="badge">Open</span>
          <div className="views" aria-label="View count">
            <img src="/icons/viewers.svg" alt="View icon" />
            <span>{views} views</span>
          </div>
        </header>
  
        <section className="card-body">
          <div className="title-area">
            <h4>{name}</h4>
            <span className="pixel-progress">{progress}</span>
          </div>
  
          <p className="screen-desc">{description}</p>
  
          <ul className="tags" aria-label="Project details">
            <li className="tag">Ref: {reference}</li>
            <li className="tag">{type}</li>
          </ul>
  
          <p className="location">{city}</p>
  
          <ul className="info-list">
            <li>
              <strong>Proyección ROI:</strong> {projection}
            </li>
            <li>
              <strong>Ingreso trimestral:</strong> {projectedReturn}
            </li>
            <li className="date-info">
              <img src="/icons/calendar.svg" alt="Calendar icon" />
              {`Quedan ${daysLeft} días (Cierra el ${endDate})`}
            </li>
          </ul>
  
          <button 
            className="buy-button"
            onClick={() => navigate(`/screen-details/${id}`)}
          >
            Comprar Pixel en este Proyecto
          </button>
        </section>
      </article>
    )
  }