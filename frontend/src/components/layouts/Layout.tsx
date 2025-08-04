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
    <main className={`grid grid-cols-3 grid-rows-12 lg:grid-cols-12 lg:grid-rows-12 dark:bg-neutral-700 dark:text-white min-h-dvh min-w-dvh ${className}`}>
      {children}
    </main>
    </>
  )
}

export default Layout