import Layout from '../components/Layout/Layout';
import styles from '../styles/404.module.css';
import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className={styles.error}>
                <h1> <FaExclamationTriangle /> 404</h1>
                <h4>You don&#39;t have to go <Link href='/'><a>home</a></Link> but you can&#39;t stay here.</h4>
            </div>
        </Layout>
    );
}