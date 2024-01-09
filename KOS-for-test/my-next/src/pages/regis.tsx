'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Artwork from '../assets/images/artwork-regis.png'
import FormRegis from '../component/FormRegis'
import Header from '../component/Header'
import { SetStateAction } from 'react'

const RegisPage = () => {
  return (
    <>
      <section className='container-fluid md:columns-2 columns-1'>
                  <picture className='artwork-wrapper'>
                        <Header />
                        <Image
                                src={Artwork}
                                  alt=''
                                  className='artwork'
                        />
                </picture>
                <FormRegis />
        </section>
    </>
  )
}

export default RegisPage