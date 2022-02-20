import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={`w-full h-48 bg-black flex items-center justify-around`}>
            <div className={`text-white`}>Copyright &copy;2022 The Sound</div>
            <div>
                <h2 className={`text-white`}>Links</h2>
                <Link href='/about'>About this project</Link>
            </div>
        </footer >
    );
}