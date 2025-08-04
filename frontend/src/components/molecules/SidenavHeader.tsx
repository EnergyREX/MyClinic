import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Typography from '../atoms/Typography'
import Divider from '../atoms/Divider'

const SidenavHeader = () => {
  return (
    <div className=''>
      <Link to={"/"}>
        <Typography variant='h1'>MyClinic</Typography>
      </Link>
    </div>
  )
}

export default SidenavHeader