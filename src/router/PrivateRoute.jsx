import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

export function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) return null

  return isAuthenticated
    ? children
    : <Navigate to="/login" state={{ from: location }} replace />
}
