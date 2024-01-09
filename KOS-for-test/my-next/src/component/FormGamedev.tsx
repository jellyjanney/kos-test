'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, SetStateAction, useState } from 'react'
import Footer from './Footer'
import Hamburger from '../../src/assets/images/icon/btn-hamburger.svg'
import NameIcon from '../../src/assets/images/icon/phonebook.svg'
import MailIcon from '../../src/assets/images/icon/mail.svg'
import GameIcon from '../../src/assets/images/icon/game-name.svg'
import TypeIcon from '../../src/assets/images/icon/game-type.svg'
import LinkIcon from '../../src/assets/images/icon/link.svg'

const FormGamedev = () => {
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
        
        return (
                <>
                <div className="form form-gamedev w-[423px] gap-[3.2rem] lg:min-h-full flex-1 flex-col justify-center mb-[5rem] lg:py-12 lg:w-1/2 lg:px-8 sm:w-full">
                        <div className="form-header lg:max-w-none sm:mx-auto sm:w-full">
                                <h2 className="inline-flex text-left text-2xl font-bold leading-9 tracking-tight title w-2/3">
                                        GAME DEVELOPERS SUbmit form
                                </h2>
                                <button className='inline-flex button-hamburger w-auto justify-end text-white'>
                                        <i className='bi bi-dash' style={{ color: '#fff' }}></i>
                                </button>
                        </div>

                        <div className="mb-6 lg:max-w-none sm:mx-auto sm:w-full"> 
                                <form className="gap-2" action="#" method="POST">
                                        <div className='columns-2 justify-content-between'>
                                                <div className='input-group w-1/2'>
                                                        <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                                Game developer name
                                                        </label>
                                                        <div className="input-control mt-0"
                                                                style={{
                                                                        backgroundImage: `url(${NameIcon.src})`,
                                                                        backgroundPositionY: '50%',
                                                                }}>
                                                                <input
                                                                        id="name"
                                                                        name="name"
                                                                        type="text"
                                                                        placeholder='Name...'
                                                                        className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                        
                                                                />
                                                        </div>
                                                </div>
                                                <div className='input-group w-1/2'>
                                                        <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                                Game developer email
                                                        </label>
                                                        <div className="input-control mt-0"
                                                                style={{
                                                                        backgroundImage: `url(${MailIcon.src})`,
                                                                        backgroundPositionY: '40%',
                                                                }}>
                                                                <input
                                                                        id="email"
                                                                        name="email"
                                                                        type="email"
                                                                        placeholder='Email...'
                                                                        className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                        
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='columns-2 justify-content-between'>
                                                <div className='input-group w-1/2'>
                                                        <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                                Game NAme
                                                        </label>
                                                        <div className="input-control mt-0"
                                                                style={{
                                                                        backgroundImage: `url(${GameIcon.src})`,
                                                                        backgroundPositionY: '50%',
                                                                }}>
                                                                <input
                                                                        id="gamename"
                                                                        name="gamename"
                                                                        type="text"
                                                                        placeholder='Name...'
                                                                        className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                        
                                                                />
                                                        </div>
                                                </div>
                                                <div className='input-group w-1/2'>
                                                        <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                                Game type
                                                        </label>
                                                        <div className="input-control mt-0"
                                                                style={{
                                                                        backgroundImage: `url(${TypeIcon.src})`,
                                                                        backgroundPositionY: '50%',
                                                                }}>
                                                                <input
                                                                        id="type"
                                                                        name="type"
                                                                        type="text"
                                                                        placeholder='Type...'
                                                                        className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                        
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='input-group w-full md:max-w-md max-w-full'>
                                                <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                        Game description
                                                </label>
                                                <div className="input-control mt-0">
                                                        <textarea
                                                                id="description"
                                                                name="description"
                                                                placeholder='Description...'
                                                                className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                
                                                        ></textarea>
                                                </div>
                                        </div>
                                        <div className='input-group w-full md:max-w-md max-w-full'>
                                                <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                        link/video
                                                </label>
                                                <div className="input-control mt-0"
                                                        style={{
                                                                backgroundImage: `url(${LinkIcon.src})`,
                                                                backgroundPositionY: '50%',
                                                        }}>
                                                        <input
                                                                id="link"
                                                                name="link"
                                                                type="text"
                                                                placeholder='Link/Video...'
                                                                className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                
                                                        />
                                                </div>
                                        </div>

                                        <div className='button-section'>
                                                <Link href="/"
                                                        type="submit"
                                                        className={hovered ? 'flex w-[100%] h-[40px] py-6 rounded-[20px] button button-primary button-hover' : 'flex w-[100%] h-[40px] py-6 rounded-[20px] button button-primary'}
                                                        onMouseEnter={toggleHover}
                                                        onMouseLeave={toggleHover}
                                                >
                                                        Submit
                                                </Link>
                                        </div>
                                </form>
                        </div>
                        
                        <Footer />
                </div>
                </>
        );
};

export default FormGamedev;