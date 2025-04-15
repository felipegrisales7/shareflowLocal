import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { PublicLayout } from '@/layouts/PublicLayout'
import { LoginForm } from '../components/login/loginForm'

export function Login() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/home'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true }) 
    }
  }, [isAuthenticated, from, navigate])

  return (
    <PublicLayout>
      <LoginForm />
    </PublicLayout>
  )
}
