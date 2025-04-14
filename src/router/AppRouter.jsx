import { Routes, Route, Navigate } from 'react-router-dom'

// Router
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

// Layout
import { PrivateLayout } from '@/layouts/PrivateLayout'

// Public pages
import { Login } from '@/pages/login'
import { Register } from '@/pages/Register'

// Private pages
import { Home } from '@/pages/Home'
import { Dashboard } from '@/pages/dashboard'

export function AppRouter() {
  console.log('app router')

  return (
    <Routes>
      {/* Rutas públicas protegidas por PublicRoute */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* Rutas privadas bajo layout */}
      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* Default: redirige a /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
