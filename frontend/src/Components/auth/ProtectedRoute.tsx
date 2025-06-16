import { Navigate, Outlet } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import { ReactElement } from 'react'

interface props {
  permission: string
  children: ReactElement
}

const ProtectedRoute = ({permission, children}: props) => {
  const { permissions } = useUserData()

  if (!permissions.includes(permission)) {
    return <Navigate to="/login" />
  } else {
    return <>{children}</>
  }
}

export default ProtectedRoute