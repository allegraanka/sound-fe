import Link from 'next/link';
import styles from './navigation.module.css';

const Navbar = () => {
    return(
        <nav className={styles.navContainer}>
            <Link href='/'>
                <a className={styles.navTitle}>The Sound</a>
            </Link>
            
            <ul className={styles.navList}>
                <li className={styles.navListItems}>
                    <a>About</a>
                </li>
                <li className={styles.navListItems}>
                    <Link href='/shows'>
                        <a>Shows</a>
                    </Link>
                </li>
                <li className={styles.navListItems}>
                    <Link href='/posts'>
                        <a>Posts</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;