import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { PublicLayout } from '@/layouts/PublicLayout'
import { RegisterForm } from '@/components/register/RegisterForm'

export function Register() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, navigate])

  return (
    <PublicLayout>
      <RegisterForm />
    </PublicLayout>
  )
}
