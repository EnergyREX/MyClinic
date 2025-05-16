import { Navigate, Outlet } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import { ReactElement } from 'react'

interface props {
  permission: string
  element: ReactElement
}

const ProtectedRoute = ({permission, element}: props) => {
  const { permissions } = useUserData()

  if (!permissions.includes(permission)) {
    return <Navigate to="/login" />
  } else {
    return <>{element}</>
  }
}

export default ProtectedRoute