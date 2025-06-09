import React from 'react'
import { Link } from 'react-router-dom'
import ErrorLayout from '../Layouts/ErrorLayout'
import { Button } from '../atoms/Button'
import Typography from '../atoms/Typography'

const NotFound = () => {
  return (
    <ErrorLayout title='Page not found'>
      <div className='flex flex-col justify-center items-center'>
      <Typography variant='h1' className='font-black'>404 Not found</Typography>
      <Typography variant='muted' className='text-neutral-500'>The page what you were looking for doesn't exist.</Typography>
        <div className='mt-2 mb-2'>
          <Link to={"/"}>
            <Button type='button' size='xl' variant='secondary' >Go home</Button>
          </Link>
        </div>
      </div>  
    </ErrorLayout>
  )
}

export default NotFound