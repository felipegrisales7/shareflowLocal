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
import { Marketplace } from '@/pages/Marketplace'
import { ScreenDetails } from '../pages/ScreenDetails'
import { ProjectDetails } from '../pages/ProjectDetails'
import { IdentityVerification } from '../pages/IdentityVerification'

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
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/screen-details/:id" element={<ScreenDetails />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/identity-verification" element={<IdentityVerification />} />
    </Route>

      {/* Default: redirige a /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
