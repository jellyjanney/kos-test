import Image from 'next/image'
import Logo from '../../src/assets/images/icon/logo-nakamoto.svg'
import Link from 'next/link';
import MultiLang from '../../src/assets/images/icon/global.png'


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
                        </nav>
                </>
        );
}