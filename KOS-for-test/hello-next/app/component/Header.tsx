import Image from 'next/image'
import Logo from '@/public/assets/images/icon/logo-nakamoto.svg'
import Link from 'next/link';
import MultiLang from '@/public/assets/images/icon/global.png'


export default function Header() {
        return (
                <>
                        <nav className='header'>
                                <Link href="#" className='header-main'>
                                        <Image src={Logo} alt='Nakamoto' className='header-main__brand' />
                                        NAKAMOTO
                                </Link>
                                <div className='inline-flex wrapper'>
                                        <Image src={MultiLang} alt='Change Language' width={24} height={24} />
                                        <button type="button" className="dropdown-button"
                                                id="multilang-button" aria-expanded="true" aria-haspopup="true">
                                                EN
                                        </button>
                                </div>
                                <div className="dropdown" role="menu" aria-orientation="vertical"
                                        aria-labelledby="multilang-button">
                                        <div className="py-1" role="none">
                                                <a href="#" className="dropdown-items" role="menuitem" id="menu-item-0">Thai</a>
                                                <a href="#" className="dropdown-items" role="menuitem" id="menu-item-1">Chiness</a>
                                                <a href="#" className="dropdown-items" role="menuitem" id="menu-item-2">Japaness</a>
                                        </div>
                                </div>
                        </nav>
                </>
        );
}