import styles from './Showcase.module.css';
import SubmitShowCTA from '../submit-show-component/submit-show.component';

export default function Showcase() {
    return (
        <div className={styles.showcaseContainer}>
            <div className={styles.showcaseCopyContainer}>
                <p className={styles.showcaseMainCopy}>Get connected <br/> with your people</p>
                <p className={styles.showcaseSubCopy}>The Sound is your source for curated live music in Rochester, NY <br/> and a catalyst for community building.</p>
                <SubmitShowCTA />
            </div>
        </div>
    );
}