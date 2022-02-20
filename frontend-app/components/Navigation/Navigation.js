import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Search from '../Search/Search';
import styles from './navigation.module.css';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return(
        <nav className={`bg-white p-4`}>
            <div className={`max-w-screen-xl mx-auto`}>
                <div className={`flex justify-between items-center`}>
                    <div className={``}>
                        <Link href='/'>
                            <a><Image src='/logos/thesound_color.png' alt='the sound logo' width={150} height={50} /></a>
                        </Link>
                    </div>
                    
                    <ul className={`hidden md:flex items-center space-x-6`}>
                        <li className={`inline`}>
                            <Link href='/about'>
                                <a className={`transition duration-300`}>About</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/shows'>
                                <a className={`transition duration-300`}>Shows</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/posts'>
                                <a className={`transition duration-300`}>Sound Board</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/'>
                                <a className={`transition duration-300`}>Sound Check Series</a>
                            </Link>
                        </li>
                        <li className={`inline`}>
                            <Link href='/'>
                                <a className={`transition duration-300`}>Non Normal Vectors</a>
                            </Link>
                        </li>
                    </ul>

                    <div className={`md:hidden z-50 flex items-center`}>
                        <button className={`outline-none mobile-menu-button`} onClick={handleClick}>
                            <svg
                                className={`w-8 h-8 text-red-dark`}
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`${active ? '' : 'hidden'} absolute top-10 right-5 bg-white w-1/2 h-auto border-l-2 border-b-2 border-red-light mobile-menu`}>
                        <ul className={`md:flex items-center`}>
                            <li className={`m-0`}>
                                <Link href='/about'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>About</a>
                                </Link>
                            </li>
                            <li className={`m-0`}>
                                <Link href='/shows'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Shows</a>
                                </Link>
                            </li>
                            <li className={``}>
                                <Link href='/posts'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Sound Board</a>
                                </Link>
                            </li>
                            <li className={``}>
                                <Link href='/'>
                                    <a className={`block text-xl uppercase px-2 transition duration-300`}>Non Normal Vectors</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;