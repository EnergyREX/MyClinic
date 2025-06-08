import React, { ReactNode, useEffect } from 'react'

interface props {
  children: ReactNode
  className?: string
  title?: string
}

const Layout = ({children, className, title}:props) => {

  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [])

  return (
    <>
    <main className={`flex flex-col justify-center items-center dark:bg-neutral-700 h-dvh ${className}`}>
      {children}
    </main>
    </>
  )
}

export default Layout