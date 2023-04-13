'use client'
import React, { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}


const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [isClientOnly, setIsClientOnly] = useState(false)

  useEffect(() => {
    setIsClientOnly(true)
  })

  if (!isClientOnly) return null

  return (
    <div>
      {children}
    </div>
  )
}

export default ClientOnly