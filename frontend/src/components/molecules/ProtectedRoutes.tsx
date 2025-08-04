import { Navigate, Outlet } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'

const ProtectedRoutes = () => {
  // Falta la lógica para comprobar si está autenticado (servicio)

  if (!isAuth)) {
    return <Navigate to="/login" />
  } else {
    return <Outlet />
  }
}

export default ProtectedRoutes