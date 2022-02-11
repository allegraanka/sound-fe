import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy 2022 The Sound</p>
            <p>
                <Link href='/about'>About this project</Link>
            </p>
        </footer >
    );
}