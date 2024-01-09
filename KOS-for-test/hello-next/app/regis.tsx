'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Regis from './pages/regis'

const RegisPage = () => {
  return (
    <main>
      <Regis />
    </main>
  );
};

export default RegisPage;