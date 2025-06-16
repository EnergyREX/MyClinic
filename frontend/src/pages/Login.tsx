import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useStore } from 'zustand';
import { Button } from '../Components/atoms/Button'
import Input from '../Components/atoms/Input';
import Label from '../Components/atoms/Label';
import Layout from '../Components/Layouts/Layout'
import useUserData from '../hooks/useUserData';

const Login = () => {
 const { permissions, addPermission, clearPermissions } = useUserData();
 const navigate = useNavigate()
  const { register, handleSubmit, 
    formState: { errors }} = useForm();
    
  const onSubmit = handleSubmit((data) => {

    // Sends a request to the server.
    const response = fetch('http://localhost:8000/api/auth/login', {
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
      // Store in localStorage the token
      if (data.original.token) { 
        localStorage.setItem('token', data.original.token)
        localStorage.setItem('role_id', data.original.role_id) 
        localStorage.setItem('user_id', data.original.user_id) 

        let permissions = data.original.permissions
        permissions.forEach(perm => {
          addPermission(perm)
        });
        navigate('/')
      }
    })

    
  })

  return (
    <main className='flex align-center justify-center' title='Register - MyClinic'>

    <form className='flex flex-col' onSubmit={onSubmit}>
      <label>Email</label>
      <input {...register("email")} type='text'
      className='border-1 rounded' />

      <label>Password</label>
      <input {...register("password")} type='password'
      className='border-1 rounded' />

      <Button type='submit' size='lg' variant='primary' onClick={onSubmit}>Submit</Button>
    </form>

    </main>
  )
}

export default Login