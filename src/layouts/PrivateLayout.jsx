import { Outlet } from 'react-router-dom'
import '@/styles/PrivateLayout.css'
import { useAuth } from '@/context/AuthContext'

//Assests
import logo from '@/assets/shareflow-pixel-logo.png'
import { SidebarMenu } from '../components/privateLayout/SidebarMenu'

export function PrivateLayout() {
    const { logout } = useAuth()
  
  return (
    <section className="private-layout">
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="Shareflow pixel Logo" />
        </div>

        <SidebarMenu />

        <button
          onClick={logout}

         className="logout">
          Cerrar Sesión
        </button>
      </aside>

      <article className="main-content">
        <header className="navbar">
          <section className="navbar-left">
            <h2>Inicio</h2>
          </section>
          <section className="navbar-right">
            <button className="icon-btn">🛒</button>
            <button className="icon-btn">🔔</button>
            <div className="user-info">
              <img src="/avatar.png" alt="User" />
              <div>
                <p className="user-name">Juan Felipe Ocampo</p>
                <p className="user-role">Administrador</p>
              </div>
            </div>
          </section>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </article>
    </section>
  )
}
