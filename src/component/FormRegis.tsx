'use client'

import Image from 'next/image'
import Link from 'next/link'
import Hamburger from '../../src/assets/images/icon/btn-hamburger.svg'
import IconMail from '../../src/assets/images/icon/mail.svg'
import IconPW from '../../src/assets/images/icon/lock.svg'
import { useState } from 'react'
import { NextApiRequest, NextApiResponse } from 'next'
import fbIcon from '../../src/assets/images/icon/facebook.svg'
import twIcon from '../../src/assets/images/icon/twitter.svg'
import ggIcon from '../../src/assets/images/icon/google.svg'
import mtIcon from '../../src/assets/images/icon/meta.svg'
import MainIcon from '../../src/assets/images/icon/login.svg'
import NextPage from '../../src/assets/images/icon/arrow-right.svg'
import Footer from './Footer'


const FormRegis = () => {
        const [showPassword, setPassword] = useState<boolean>(false);
        const [showRepass, setShowrepass] = useState<boolean>(false);
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
        
  return (
        <div className="form form-regis lg:min-h-full flex-1 flex-col justify-center lg:py-12 lg:w-1/2 lg:px-8 sm:w-full">
                <div className="form-header lg:max-w-none sm:mx-auto sm:w-full">
                        <h2 className="inline-flex text-left text-2xl font-bold leading-9 tracking-tight title w-2/3">
                                Register
                        </h2>
                        <button className='inline-flex button-hamburger w-auto justify-end text-white'>
                                <i className='bi bi-dash' style={{ color: '#fff' }}></i>
                        </button>
                </div>

                <div className="lg:max-w-none sm:mx-auto sm:w-full">
                        <form className="mb-4" action="#" method="POST">
                                <div className='input-group'>
                                        <label htmlFor="email" className="block text-base text-zinc-500 font-bold leading-6">
                                                Email Adress
                                        </label>
                                          <div className="input-control mt-0"
                                                  style={{
                                                          backgroundImage: `url(${IconMail.src})`,
                                                          backgroundPositionY: '35%',
                                                  }}>
                                                <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder='Email'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                />
                                        </div>
                                </div>
                                <div className='input-group columns-2 justify-between'>
                                        <div className="lg:w-[220px] sm:w-[67%] w-[60%] bg-zinc-900 rounded-lg border border-neutral-800 justify-start items-center gap-[18px] inline-flex mt-0">
                                                  <input
                                                        id="verify"
                                                        name="verify"
                                                        type="text"
                                                        placeholder='Verification code'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                />
                                        </div>
                                        <span className="lg:w-[100px] sm:w-[30%] w-[35%] px-[5px] py-[15px] bg-red-600 border-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex button button-secondary cursor-pointer hover:bg-purple-500 hover:border-purple-500 active:bg-purple-500">
                                                Get Code
                                        </span>
                                </div>
                                
                                
                                <div className='input-group'>
                                        <label htmlFor="email" className="block text-base text-zinc-500 font-bold leading-6">
                                                Password
                                        </label>
                                        <div className="input-control mt-0" style={{ backgroundImage: `url(${IconPW.src})` }}>
                                                <input
                                                        id="password"
                                                        name="password"
                                                        type={showPassword ? 'text': 'password'}
                                                        placeholder='Password'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                        
                                                />
                                                <span className='button-fixed inline-flex w-auto justify-end'>
                                                        <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'} onClick={() => setPassword(!showPassword)}></i>
                                                </span>
                                        </div>
                                        <label className="block mt-0 leading-6">
                                                A number or symbol, atleast 6 characters
                                        </label>
                                </div>
                                
                                <div className='input-group'>
                                        <div className="input-control mt-0" style={{ backgroundImage: `url(${IconPW.src})` }}>
                                                <input
                                                        id="re-password"
                                                        name="password"
                                                        type={showRepass ? 'text': 'password'}
                                                        placeholder='Confirm Password'
                                                        className="block w-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:sm:leading-6"
                                                        
                                                />
                                                <span className='button-fixed inline-flex w-auto justify-end'>
                                                        <i className={showRepass ? 'bi bi-eye-slash' : 'bi bi-eye'} onClick={() => setShowrepass(!showRepass)}></i>
                                                </span>
                                        </div>
                                </div>
                                <div className='input-group my-5'>
                                        <div className="flex items-start gap-5">
                                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                                                        className="w-4 h-4 bg-zinc-900 rounded-md border border-zinc-600 justify-start items-start gap-2.5 inline-flex focus:ring-purple-600 my-1" />
                                        
                                                <label htmlFor="helper-checkbox" className="w-[304px] text-zinc-500 text-[10px] font-bold font-['PP Neue Machina'] uppercase leading-6">
                                                        Would you like to subscribe to Nakamoto Games Newsletter?
                                                </label>
                                        </div>
                                </div>


                                <div className='button-section'>
                                        <Link href="/"
                                                type="button"
                                                className="inline-flex justify-center rounded-[20px] button button-outline-light mr-4"
                                        >
                                                Login
                                        </Link>
                                        <Link href="/createprofile"
                                                type="submit"
                                                className={ hovered? 'inline-flex w-[60%] rounded-[20px] button button-primary button-hover':'inline-flex w-[60%] rounded-[20px] button button-primary'}
                                                onMouseEnter={toggleHover}
                                                onMouseLeave={toggleHover}
                                        >
                                                <Image src={ hovered? NextPage: MainIcon  } alt='' width={24} height={24} className="mr-4" />
                                                Register
                                        </Link>
                                </div>
                        </form>
                        
                        
                </div>
                <div className='mt-1 mb-6 lg:max-w-none sm:mx-auto w-full w-100'>
                        <h6 className="devider uppercase font-bold">OR Join us with</h6> 
                        
                        <ul className='social-nav'>
                                <li className='social-nav__item rounded-lg'>
                                        <Link href="#fb" className='social-nav__item--link'>
                                                <Image src={fbIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item rounded-lg'>
                                          <Link href="#gg" className='social-nav__item--link'>
                                                  <Image src={ggIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item rounded-lg'>
                                        <Link href="#tw" className='social-nav__item--link'>
                                                <Image src={twIcon} alt='' width={40} height={40} />
                                        </Link>
                                </li>
                                <li className='social-nav__item rounded-lg'>
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

export default FormRegis;