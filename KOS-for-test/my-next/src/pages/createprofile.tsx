'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Artwork from '../assets/images/artwork-createpro.png'
import FormCreateprofile from '../component/FormCreateprofile'
import Header from '../component/Header'
import { SetStateAction } from 'react'

const CreateProfile = () => {
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
                <FormCreateprofile />
        </section>
    </>
  )
}

export default CreateProfile