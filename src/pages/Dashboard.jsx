import { useAuth } from "@/context/AuthContext"

export function Dashboard() {
  const { logout } = useAuth()
  
    return (
      <>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard!</p>
        <p>This is a protected route.</p>
        <p>You can only see this if you are authenticated.</p>
        <button onClick={logout}>salir</button>
      </>
    )
  }
  