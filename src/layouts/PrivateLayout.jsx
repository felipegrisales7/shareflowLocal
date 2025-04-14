import { Outlet } from 'react-router-dom'
import '@/styles/PrivateLayout.css'

export function PrivateLayout() {
  return (
    <div className="private-layout">
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="Shareflow Logo" />
          <span className="logo-tag">Pixel</span>
        </div>

        <nav className="sidebar-menu">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Dashboard</a></li>

            <p className="sidebar-section">Marketplace</p>
            <li><a href="#">Comprar</a></li>
            <li><a href="#">Mis Pixeles</a></li>

            <p className="sidebar-section">Administrar</p>
            <li><a href="#">Wallet</a></li>
            <li><a href="#">Transacciones</a></li>
            <li><a href="#">Referidos</a></li>

            <p className="sidebar-section">Otros</p>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Ayuda</a></li>
          </ul>
        </nav>

        <div className="logout">
          <a href="#">Cerrar Sesión</a>
        </div>
      </aside>

      <main className="main-content">
        <header className="navbar">
          <div className="navbar-right">
            <button className="icon-btn">🛒</button>
            <button className="icon-btn">🔔</button>
            <div className="user-info">
              <img src="/avatar.png" alt="User" />
              <div>
                <p className="user-name">Juan Felipe Ocampo</p>
                <p className="user-role">Administrador</p>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
