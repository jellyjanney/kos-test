'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Artwork from '../assets/images/artwork-login.png'
import FormLogin from '../component/FormLogin'
import Header from '../component/Header'
import { SetStateAction } from 'react'

export default function Home() {
  return (
    <main>
      <section className='container-fluid md:columns-2 columns-1'>
                  <picture className='artwork-wrapper'>
                        <Header />
                        <Image
                                src={Artwork}
                                  alt=''
                                  className='artwork'
                        />
                </picture>
                <FormLogin />
        </section>
    </main>
  )
}
