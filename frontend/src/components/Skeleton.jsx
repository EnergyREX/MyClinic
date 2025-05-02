import React from 'react'

export default function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={`bg-accent animate-pulse rounded-md ${className}`}
      {...props}
    />
  )
}