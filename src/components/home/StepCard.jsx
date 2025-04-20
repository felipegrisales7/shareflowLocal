import '@/styles/StepCard.css'

export function StepCard({ id, title, description, image, actionLabel, onClick }) {
  return (
    <div className="step-card">
      <img src={image} alt={title} />
      <div className="step-content">
        <h3>{id}. {title}</h3>
        <p>{description}</p>
      </div>
      <button className="step-button" onClick={onClick}>{actionLabel}</button>
    </div>
  )
}
