import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search/Search';
import styles from './navigation.module.css';

const Navbar = () => {
    return(
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a><Image src='/logos/thesound_color.png' alt='the sound logo' width={150} height={50} /></a>
                </Link>
            </div>

            <Search />
            
            <ul className={styles.navList}>
                <li className={styles.navListItems}>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.navListItems}>
                    <Link href='/shows'>
                        <a>Shows</a>
                    </Link>
                </li>
                <li className={styles.navListItems}>
                    <Link href='/posts'>
                        <a>Sound Check</a>
                    </Link>
                </li>
                <li className={styles.navListItems}>
                    <Link href='/'>
                        <a>Non Normal Vectors</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;