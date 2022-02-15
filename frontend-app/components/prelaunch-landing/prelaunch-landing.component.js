import styles from './prelaunch-landing.module.css';
import EmailCapture from '../email-capture/email-capture.component';

const PrelaunchLanding = () => {
    return(
        <div className={styles.container}>
            <div className={styles.copy}>
                <h1 className={styles.heading}>Be in the know.</h1>
                <p className={styles.subheading}>Get notified when The Sound launches.</p>
                <EmailCapture />
            </div>
        </div>
    );
}

export default PrelaunchLanding;