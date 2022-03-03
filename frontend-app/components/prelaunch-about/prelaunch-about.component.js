import styles from './prelaunch-about.module.css';

const PrelaunchAbout = () => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.copy}>
                <h1 className={styles.heading}>The Sound is coming soon</h1>
                <div className={styles.textSection}>
                    {/* <p className={styles.text}>
                        Live music is one of the most powerful human experiences.
                        It radiates electricity, force, inspiration.
                        It is one of the most simple, yet powerful, ways to bring people together and create enigmatic connections.
                    </p> */}
                    <p className={styles.text}>
                        Rochester, NY has a vibrant and eclectic local music scene composed of driven, talented artists, historic and fun music venues, 
                        and enthusiastic listeners who drive to see shows even when the roads are covered in snow.
                    </p>
                    <p className={styles.text}>
                        <b>The Sound</b> is a community-building resource dedicated to celebrating, fostering, and growing live music and all who make it happen here in the beautiful city of Rochester.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default PrelaunchAbout;