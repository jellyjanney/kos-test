'use client'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from '@/public/assets/images/icon/btn-hamburger.svg'
import IconMail from '@/public/assets/images/icon/mail.svg'
import IconPW from '@/public/assets/images/icon/lock.svg'
import { FC, SetStateAction, useState } from 'react'
import fbIcon from '@/public/assets/images/icon/facebook.svg'
import twIcon from '@/public/assets/images/icon/twitter.svg'
import ggIcon from '@/public/assets/images/icon/google.svg'
import mtIcon from '@/public/assets/images/icon/meta.svg'
import MainIcon from '@/public/assets/images/icon/login.svg'
import NextPage from '@/public/assets/images/icon/arrow-right.svg'
import Footer from './Footer'

interface Props {
        password: string;
        setPassword: (value: SetStateAction<string>) => void;
}

const FormLogin: FC<Props> = ({
        password,
        setPassword,
}): JSX.Element => {
        const [visible, setVisible] = useState<boolean>(false);
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
  return (
        <div className="form lg:min-h-full flex-1 flex-col justify-center lg:py-12 lg:w-1/2 lg:px-8 sm:w-full">
                <div className="form-header lg:max-w-none sm:mx-auto sm:w-full">
                        <h2 className="inline-flex text-left text-2xl font-bold leading-9 tracking-tight title w-2/3">
                        Log in
                        </h2>
                        <button className='inline-flex w-auto justify-end'>
                                <Image src={Hamburger} alt='' width={40} height={40} />
                        </button>
                </div>

                <div className="lg:max-w-none sm:mx-auto sm:w-full">
                        <form className="" action="#" method="POST">
                                <div className='input-group'>
                                        <label htmlFor="email" className="block font-medium leading-6">
                                                Email Adress
                                        </label>
                                          <div className="input-control mt-3"
                                                  style={{
                                                          backgroundImage: `url(${IconMail.src})`,
                                                          backgroundPositionY: '35%',
                                                  }}>
                                                <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder='Email'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6"
                                                />
                                        </div>
                                </div>
                                
                                <div className='input-group'>
                                        <label htmlFor="email" className="block font-medium leading-6">
                                                Password
                                        </label>
                                        <div className="input-control mt-3" style={{ backgroundImage: `url(${IconPW.src})` }}>
                                                <input
                                                        id="password"
                                                        name="password"
                                                        type={visible ? 'text': 'password'}
                                                        placeholder='Password'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6"
                                                        
                                                />
                                                <span id='showPassword' className='button-fixed inline-flex w-auto justify-end'>
                                                        <i className={visible ? 'bi bi-eye-slash' : 'bi bi-eye'} onClick={() => setVisible(!visible)}></i>
                                                </span>
                                        </div>
                                        <label className="block mt-4 leading-6">A number or symbol, atleast 6 characters</label>
                                </div>


                                <div className='button-section'>
                                        <Link href="/regis"
                                                type="button"
                                                className="inline-flex justify-center button button-outline-light mr-4"
                                        >
                                                Register
                                        </Link>
                                        <Link href="#"
                                                type="submit"
                                                className={ hovered? 'inline-flex button button-primary button-hover':'inline-flex button button-primary'}
                                                onMouseEnter={toggleHover}
                                                onMouseLeave={toggleHover}
                                        >
                                                <Image src={ hovered? NextPage: MainIcon  } alt='' width={24} height={24} className="mr-4" />
                                                Sign in
                                        </Link>
                                </div>
                        </form>

                        <p className="mt-10 block text-right text-gray-500">
                                <Link href="#" className="font-bold uppercase leading-6 text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                </Link>
                        </p>
                        
                        
                </div>
                <div className='mt-1 lg:max-w-none sm:mx-auto sm:w-full'>
                        <h6 className="devider uppercase font-bold">OR Log in with</h6> 
                        
                        <ul className='social-nav'>
                                <li className='social-nav__item'>
                                        <Link href="#fb" className='social-nav__item--link'>
                                                <Image src={fbIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item'>
                                          <Link href="#gg" className='social-nav__item--link'>
                                                  <Image src={ggIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item'>
                                        <Link href="#tw" className='social-nav__item--link'>
                                                <Image src={twIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item'>
                                        <Link href="#mt" className='social-nav__item--link'>
                                                <Image src={mtIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                        </ul>
                </div>
                <Footer />
        </div>
  )
}

export default FormLogin;