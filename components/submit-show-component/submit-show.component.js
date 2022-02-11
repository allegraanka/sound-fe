import styles from './submit-show.module.css';
import Link from 'next/link';

const SubmitShowCTA = () => {

    return(
        <div className={styles.submitShowContainer}>
            <Link href='/'>
                <a className={`${styles.submitShowButton} uk-button uk-button-secondary`}>Submit your show</a>
            </Link>
            <p className={styles.submitShowCopy}>Do you have a show coming up? Let us know!</p>
        </div>
    );
}

export default SubmitShowCTA;