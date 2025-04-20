import { useNavigate } from "react-router-dom";

export function ProjectSummary({
    name,
    description,
    reference,
    location,
    type,
    price,
    progress,
    total,
    projectId,
  }) {
    const navigate = useNavigate()

    return (
      <section className="project-summary">
        <div className="project-summary-left">
          <span >Proyecto</span>
          <h2 >{name}</h2>
          <p>{description}</p>
  
          <ul className="project-tags">
            <li className="tag">Ref: {reference}</li>
            <li className="tag">{location}</li>
            <li className="tag">{type}</li>
          </ul>
  
          <div className="project-price-section">
            <p>Tu pixel por solo</p>
            <strong className="project-summary-price">{price}</strong>
          </div>
        </div>
  
        <div className="project-summary-right">
          <div className="project-availability">
            <span>{progress}</span>
            <span>/{total}</span>
            <p>Pixeles Disponibles</p>
          </div>
  
          <button className="project-summary-right" onClick={() => navigate(`/project-details/${projectId}`)}>
            Quiero hacer parte →
          </button>
        </div>
      </section>
    );
  }
  