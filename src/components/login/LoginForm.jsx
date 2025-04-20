import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import logo from '@/assets/images/login-logo.png'
import '@/styles/LoginForm.css'

export function LoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())

    const result = await login(values)
    if (result.success) {
      navigate('/home')
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="login-wrapper">
      <img className="login-logo" src={logo} alt='Shareflow logo' />
      <h1 className="login-title">Bienvenido a Pixel Crew 👋🏼</h1>
      <p className="login-subtitle">
        Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Correo electrónico
          <input name="email" type="email" placeholder="felipocampo@shareflow.com" required defaultValue='felipe@pixel.com'/>
        </label>
        <label>
          Contraseña *
          <input name="password" type="password" required defaultValue='123456'/>
        </label>

        {error && <p className="login-error">{error}</p>}

        <div className="login-forgot">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" className="login-button">Iniciar Sesión</button>
      </form>

      <div className="login-footer">
        <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
        <div className="login-separator">Inicia sesión o registrate con Google</div>
        <button className="google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Continuar con Google
        </button>
      </div>

      <div className="login-copy">© 2025 Todos los derechos reservados</div>
    </div>
  )
}
