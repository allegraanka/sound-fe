import Link from 'next/link';
import styles from './navigation.module.css';

const Navbar = () => {
    return(
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>The Sound</a>
                </Link>
            </div>
            
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