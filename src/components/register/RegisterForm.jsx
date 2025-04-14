import '@/styles/RegisterForm.css'

export function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    console.log('📩 Datos enviados:', values)
  }

  return (
    <div className="register-wrapper">
      <h1 className="register-title">Crea tu cuenta en Pixel Crew 😎</h1>
      <p className="register-subtitle">
        Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
      </p>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-radio-group">
          <label>
            <input type="radio" name="tipo" value="comprar" defaultChecked />
            Quiero comprar pixel
          </label>
          <label>
            <input type="radio" name="tipo" value="referido" />
            Soy un referido
          </label>
        </div>

        <label>
          Nombre completo *
          <input name="nombre" required />
        </label>

        <label>
          Correo electrónico *
          <input name="email" type="email" required />
        </label>

        <label>
          Contraseña *
          <input name="password" type="password" required />
        </label>

        <label>
          Celular / Contacto *
          <div className="phone-group">
            <span className="phone-prefix">+57</span>
            <input name="telefono" type="tel" required />
          </div>
        </label>

        <label>
          ¿Cómo nos conociste? *
          <select name="fuente" required>
            <option value="">Selecciona una opción</option>
            <option value="instagram">Instagram</option>
            <option value="referido">Un referido</option>
            <option value="google">Google</option>
            <option value="evento">Evento</option>
          </select>
        </label>

        <label>
          Escribe tu código de referido
          <input name="codigo" />
        </label>

        <button type="submit" className="register-button">Crear cuenta</button>
      </form>

      <div className="register-footer">
        <p>¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a></p>
        <div className="register-separator">Inicia sesión o regístrate con Google</div>
        <button className="google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
          Continuar con Google
        </button>
      </div>

      <div className="login-copy">© 2025 Todos los derechos reservados</div>
    </div>
  )
}
