import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Components/atoms/Button'
import InputField from '../Components/molecules/InputField';
import PageTitle from '../Components/layouts/PageTitle';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../Components/layouts/AuthLayout';
import Typography from '../Components/atoms/Typography';
import { SquareArrowOutUpRightIcon } from 'lucide-react'

const Register = () => {
  const { t } = useTranslation('common'); // Usamos el namespace common
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = handleSubmit((data) => {
    fetch('http://localhost:8000/api/auth/register', {
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
      if (data.success || data.original) {
        navigate('/login');
      }
    })
  })

  return (
    <>
      <PageTitle>{t('register.title')}</PageTitle>
      <AuthLayout>
        <div className='mb-5 mt-5 w-full justify-center items-center text-center'>
          <Typography variant='h1' className='font-bold'>{t('register.title')}</Typography>
          <Typography variant='muted' className='text-neutral-500 dark:text-neutral-400'>{t('register.subtle')}</Typography>
        </div>
        <div className='bg-neutral-300 p-5 rounded-lg dark:bg-neutral-700 dark:text-white max-w-md w-full'>
          <form className='flex flex-col gap-4' onSubmit={onSubmit}>
            <InputField label={t('register.dni')} type="text" {...register("dni")} />
            <InputField label={t('register.name')} type="text" {...register("name")} />
            <InputField label={t('register.surname')} type="text" {...register("surname")} />
            <InputField label={t('register.email')} type="text" {...register("email")} />
            <InputField label={t('register.phone_number')} type="text" {...register("phone_number")} />
            <InputField label={t('register.address')} type="text" {...register("address")} />
            <InputField label={t('register.password')} type="password" {...register("password")} />
            <InputField label={t('register.confirm_password')} type="password" {...register("confirm_password")} />
            <Button type='submit' size='lg' variant='primary'>{t('register.button')}</Button>
          </form>

        </div>

        <Link className='font-light pt-2 dark:text-white flex gap-2 hover:text-sky-500 duration-100' to={'/login'}>{t('already-registered')} <SquareArrowOutUpRightIcon className='w-[16px]'/></Link>
      </AuthLayout>
    </>
  )
}

export default Register
