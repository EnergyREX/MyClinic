import React, { ReactNode } from 'react'
import useUserData from '../../hooks/useUserData'
import { Navigate } from 'react-router-dom';

// This atom will be responsible of rendering different parts of the UI.
// To reach this objective, will check everytime the permissions, if the user hasn't permissions, then
// will not render the part of the UI.
// An example of ussage could be this: 
// <Permission perm="delete_appointment">
//  <Button>*Icon*</Button>
// </Permission>
// This would be very useful for templates (for example, Crud or Layouts).

interface props {
  children: ReactNode,
  requiredPermission: string
}

const Permission = ({ children, requiredPermission }: props) => {

  const { permissions } = useUserData();  
  const hasPermission = permissions.includes(requiredPermission)

  console.log(hasPermission)

    if (!hasPermission) {
      return <></>
    } else {
      return <>{children}</>
    }
  
}

export default Permission