import styles from './prelaunch-landing.module.css';

const PrelaunchLanding = () => {
    return(
        <div className={styles.container}>
            <div className={styles.copy}>
                <h1 className={styles.heading}>Be in the know.</h1>
                <p className={styles.subheading}>Get notified when The Sound launches.</p>
            </div>
        </div>
    );
}

export default PrelaunchLanding;