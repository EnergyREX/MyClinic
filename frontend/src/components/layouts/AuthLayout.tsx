import React from 'react'

interface props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const AuthLayout = ({ children, className, ...props }: props) => {
  
  const style: string = 'flex flex-col items-center justify-center h-[100vh] bg-gray-100 w-full dark:bg-neutral-800';
  
  return (
    <main className={`${style} ${className}`} {...props}>{children}</main>
  )
}

export default AuthLayout