import React, { ReactNode, useEffect } from 'react'
import { Navigate, Outlet, Routes } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'

interface props {
  permission?: string
}

const ProtectedRoutes = ({permission}: props) => {

  const { permissions, recoverPermissions } = useUserData()

    useEffect(() => {
      if (permissions.length == 0) {
          recoverPermissions()
      } else {
        console.log(permissions)
      }
    }, []);

  if (!localStorage.getItem('token')) {
    return (
      <Navigate to="/login" replace />
    )
  } else {
    return (
      <Outlet />
  )
  }
}

export default ProtectedRoutes