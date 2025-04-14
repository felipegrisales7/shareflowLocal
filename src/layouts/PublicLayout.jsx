import mockupImage from '@/assets/mockup1.png'
import '@/styles/PublicLayout.css'

export function PublicLayout({ children }) {
  return (
    <div className="public-container">
        <div className="public-left">
            <img src={mockupImage} alt="Visual" />
        </div>
        <div className="public-right">
            {children}
        </div>
    </div>

  )
}
