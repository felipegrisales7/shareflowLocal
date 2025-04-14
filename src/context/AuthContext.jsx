import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')

    if (storedToken && storedUser) {
      setIsAuthenticated(true)
      setUser(JSON.parse(storedUser))
    }

    setIsLoading(false)
  }, [])

  const login = async ({ email, password }) => {
    // Credenciales válidas para simular login
    console.log('Login attempt with:', email, password)
    const VALID_EMAIL = 'felipe@pixel.com'
    const VALID_PASSWORD = '123456'
  
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      const data = {
        token: 'fake-token-123',
        user: { name: 'Felipe', email },
      }
  
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
  
      setIsAuthenticated(true)
      setUser(data.user)
  
      return ({success: true})  
    } else {
      return {
        success: false,
        message: 'Correo o contraseña incorrectos',
      }
    }
  }
  

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading  }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
