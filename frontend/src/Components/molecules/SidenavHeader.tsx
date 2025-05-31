import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Typography from '../atoms/Typography'
import Divider from '../atoms/Divider'

interface props {
  children: ReactNode
}

const SidenavHeader = ({children}: props) => {
  return (
    <div className='mb-3'>
      <Link to={"/"}>
        <Typography variant='h1'>MyClinic</Typography>
        <Divider />
      </Link>
    </div>
  )
}

export default SidenavHeader