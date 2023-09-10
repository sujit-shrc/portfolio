"use client";

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

export default function Provider({ children, }: { children: React.ReactNode }){
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }
  
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      {children}
    </ThemeProvider>
  )
}
