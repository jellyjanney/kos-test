import Image from 'next/image'
import Artwork from '@/public/assets/images/artwork-login.png'
import FormLogin from '../component/FormLogin'
import Header from '../component/Header'
import { SetStateAction } from 'react'

export default function Regis() {
  return (
        <section className='container-fluid md:columns-2 columns-1'>
                  <picture className='artwork-wrapper'>
                        <Header />
                        <Image
                                src={Artwork}
                                  alt=''
                                  className='artwork'
                        />
                </picture>
                <FormLogin password={''} setPassword={function (value: SetStateAction<string>): void {
        throw new Error('Function not implemented.')
      } } />
        </section>
  )
}
