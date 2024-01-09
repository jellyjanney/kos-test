'use client'

import Image from 'next/image'
import Link from 'next/link'
import Hamburger from '../../src/assets/images/icon/btn-hamburger.svg'
import NameIcon from '../../src/assets/images/icon/phonebook.svg'
import RandomName from '../../src/assets/images/icon/random.svg'
import { FC, SetStateAction, useState } from 'react'
import Footer from './Footer'
import MainIcon from '../../src/assets/images/icon/btn-create.png'
import PrevAvt from '../../src/assets/images/icon/arrow-left.svg'
import NextAvt from '../../src/assets/images/icon/arrow-right-2.svg'
import NextPage from '../../src/assets/images/icon/arrow-right.svg'
import avt1 from '/src/assets/images/avatar/Avatar-001@2x.png'
import avt2 from '/src/assets/images/avatar/Avatar-002@2x.png'
import avt3 from '/src/assets/images/avatar/Avatar-003@2x.png'
import avt4 from '/src/assets/images/avatar/Avatar-004@2x.png'

// Avatart src
const avatars = [
  avt1,
  avt2,
  avt3,
  avt4,
];

// Random Display name
const getRandomName = (name: string) => {
        const names = [
                'Andrea Martínez',
                'Luna Frostwhisper',
                'Raven Stormcloak',
                'Kairos Swiftwind',
                'Nova Starlight',
                'Aether Stardust'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
};

const FormRegis = () => {
        const [hovered, setHovered] = useState(false);
        const toggleHover = () => setHovered(!hovered);
        
        const [name, setName] = useState(getRandomName());
        const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

        const handleRandomNameClick = () => {
                const randomName = getRandomName();
                setName(randomName);
        };

        const handleSelectAvatar = (avatar: string) => {
                setSelectedAvatar(avatar);
        };
        
        const getAvatarUrl = () => {
                return selectedAvatar;
        };
        
        return (
                <>
                <div className="form form-create gap-0 lg:min-h-full flex-1 flex-col justify-center mb-[5rem] lg:py-12 lg:w-1/2 lg:px-8 sm:w-full">
                        <div className="form-header lg:max-w-none sm:mx-auto sm:w-full">
                                <h2 className="inline-flex text-left text-2xl font-bold leading-9 tracking-tight title w-2/3">
                                        Crate Profile
                                </h2>
                                <button className='inline-flex button-hamburger w-auto justify-end text-white'>
                                        <i className='bi bi-dash' style={{ color: '#fff' }}></i>
                                </button>
                        </div>

                        <div className="mb-6 lg:max-w-none sm:mx-auto sm:w-full">
                                <div className="create-avatar flex flex-row justify-center align-items-center gap-[3.8rem] my-[3.2rem]">
                                        <button type="button"
                                                className="w-[40px] h-[40px] p-3 bg-zinc-900 rounded-lg border border-neutral-800 backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex hover:border-purple-600 hover:bg-purple-500 focus:border-purple-600 focus:bg-purple-500">
                                                <Image
                                                        src={PrevAvt} alt="Prev"
                                                        width={24} height={24}
                                                        //onClick={ }
                                                />
                                        </button>
                                        <picture className="w-[100px] h-[100px] p-1.5 rounded-[14px] border-2 border-red-600 justify-start items-start gap-2.5 inline-flex">
                                                <Image src={getAvatarUrl()} alt={name} width={88} height={88}
                                                        className="rounded-lg justify-center items-center flex" />
                                        </picture>
                                        <button type="button"
                                                className="w-[40px] h-[40px] p-3 bg-zinc-900 rounded-lg border border-neutral-800 backdrop-blur-[60px] justify-center items-center gap-2.5 inline-flex hover:border-purple-600 hover:bg-purple-500 focus:border-purple-600 focus:bg-purple-500">
                                                <Image
                                                        src={NextAvt} alt="Next"
                                                        width={24} height={24}
                                                        //onClick={ }
                                                />
                                        </button>
                                </div>
                                
                                <form className="mb-4" action="#" method="POST">
                                        <div className='input-group'>
                                                <label htmlFor="email" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                        display name
                                                </label>
                                                <div className="input-control mt-0"
                                                        style={{
                                                                backgroundImage: `url(${NameIcon.src})`,
                                                                backgroundPositionY: '50%',
                                                        }}>
                                                        <input
                                                                id="displayname"
                                                                name="displayname"
                                                                type="text"
                                                                placeholder='Display Name'
                                                                className="block w-full text-zinc-500 placeholder:text-gray-400 focus:ring-2 active:ring-purple-500 focus:ring-purple-500 sm:sm:leading-6"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                        />
                                                        <span className='button-fixed inline-flex w-auto justify-end min-h-[100%]'>
                                                                <Image src={RandomName} alt='Random Name'
                                                                        className="" onClick={handleRandomNameClick}></Image>
                                                        </span>
                                                </div>
                                                <label className="text-zinc-600 text-[10px] font-bold font-['Neue Machina'] uppercase">Can modified later</label>
                                        </div>
                                        
                                        <div className='input-group'>
                                                <label htmlFor="avatar" className="block text-base text-zinc-500 leading-6 uppercase font-bold ">
                                                        Avartar
                                                </label>
                                                <div className="mt-0 flex flex-row flex-wrap align-items-start gap-[1.2rem]" >
                                                        {avatars.map((avatar, index) => (
                                                                <Image
                                                                        key={index}
                                                                        src={avatar}
                                                                        alt={`Avatar ${index + 1}`}
                                                                        width={40} height={40}
                                                                        onClick={() => handleSelectAvatar(avatar)}
                                                                        className={
                                                                                `w-[60px] h-[60px] p-1.5 rounded-[14px] border-2 ${ avatar === selectedAvatar ? 'border-red-500' : 'border-neutral-800' }  justify-start items-start gap-2.5 inline-flex hover:border-red-600 focus:border-red-600 cursor-pointer`
                                                                        }
                                                                />
                                                        ))}
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
                                                <Link href="/gamedev"
                                                        type="submit"
                                                        className={hovered ? 'flex w-[100%] h-[40px] py-6 lg:mb-[24px] rounded-[20px] button button-primary button-hover' : 'flex w-[100%] h-[40px] lg:mb-[24px] py-6 rounded-[20px] button button-primary'}
                                                        onMouseEnter={toggleHover}
                                                        onMouseLeave={toggleHover}
                                                >
                                                        <Image src={hovered ? NextPage : MainIcon} alt='' width={24} height={24} className="mr-4" />
                                                        Create
                                                </Link>
                                        </div>
                                </form>
                        </div>
                        
                        <Footer />
                </div>
                </>
        );
};

export default FormRegis;