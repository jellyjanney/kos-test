'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Login from './pages/login'

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  )
}
