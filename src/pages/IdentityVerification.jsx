import '@/styles/IdentityVerification.css'

export function IdentityVerification() {
  return (
    <main className="identity-verification-container">
      <section className="identity-form">
        <h2 className="form-heading">
          Hey! Juan Felipe,<br />Estas a un paso de tener tu pixel :D
        </h2>
        <p className="form-subtext">
          Un píxel es más que un fragmento de una pantalla, es tu espacio, tu inversión y la posibilidad de ser parte de algo que transforma la ciudad.
        </p>

        <form className="verification-form">
          <div className="form-grid">
            <label>
              Nombres *
              <input type="text" placeholder="Juan Felipe" required />
            </label>
            <label>
              Apellidos *
              <input type="text" placeholder="Ocampo" required />
            </label>

            <label>
              Tipo de documento *
              <select required>
                <option>Cédula de ciudadanía</option>
              </select>
            </label>
            <label>
              Número de Identificación *
              <input type="text" placeholder="986543890" required />
            </label>

            <label>
              Fecha de nacimiento *
              <input type="date" defaultValue="1996-06-04" required />
            </label>
            <label>
              Dirección de domicilio *
              <input type="text" placeholder="Carrera 48A #14-26" required />
            </label>

            <label>
              Departamento/Estado *
              <select required>
                <option>Antioquía</option>
              </select>
            </label>
            <label>
              Ciudad *
              <select required>
                <option>Medellín</option>
              </select>
            </label>
          </div>

          <button type="submit" className="form-submit">Continuar →</button>
        </form>
      </section>

      <aside className="identity-right-box">
        <div className="identity-card">
          <h3>🌀 Autenticación de Identidad</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="validate-btn">Validar mi identidad →</button>
        </div>

        <div className="identity-card">
          <h3>📄 Firma de documento</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="sign-btn">Firmar documento →</button>
        </div>
      </aside>
    </main>
  )
}
