import { SIDEBAR_MENU } from '@/constants/sidebar'
import { Link, useLocation } from 'react-router-dom'

export function SidebarMenu() {
  const location = useLocation()

  return (
    <nav className="sidebar-menu">
      <ul>
        {SIDEBAR_MENU.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <p className="sidebar-section">{section.title}</p>
            )}
            {section.items.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </nav>
  )
}
