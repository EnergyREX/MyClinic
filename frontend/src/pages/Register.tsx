import React from 'react'
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom'
import { Button } from '../Components/atoms/Button'
import Input from '../Components/atoms/Input';
import Label from '../Components/atoms/Label';
import Layout from '../Components/Layouts/Layout'

const Register = () => {

  const { register, handleSubmit, 
    formState: { errors }} = useForm();
    
  const onSubmit = handleSubmit((data) => {
    const response = fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      if (data) {
        return <Navigate to="/login" />
      }
    }
)

    
  })

  return (
    <Layout className='flex align-center justify-center' title='Register - MyClinic'>

    <form className='flex flex-col' onSubmit={onSubmit}>
      <label>DNI</label>
      <input {...register("dni")} type='text'
      className='border-1 rounded' />

      <label>Name</label>
      <input {...register("name")} type='text'
      className='border-1 rounded' />

      <label>Surname</label>
      <input {...register("surname")} type='text'
      className='border-1 rounded' />

      <label>Address</label>
      <input {...register("address")} type='text'
      className='border-1 rounded' />

      <label>Email</label>
      <input {...register("email")} type='text'
      className='border-1 rounded' />

      <label>Phone Number</label>
      <input {...register("phone_number")} type='text'
      className='border-1 rounded' />

      <label>Password</label>
      <input {...register("password")} type='password'
      className='border-1 rounded' />

      <label>Confirm Password</label>
      <input {...register("confirm_password")} type='password'
      className='border-1 rounded' />

      <Button type='submit' size='lg' variant='primary' onSubmit={onSubmit}>Submit</Button>
    </form>

    </Layout>
  )
}

export default Register