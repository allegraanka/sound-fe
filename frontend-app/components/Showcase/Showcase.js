import styles from './Showcase.module.css';
import SubmitShowCTA from '../submit-show-component/submit-show.component';

export default function Showcase() {
    return (
        <div className={`md:col-span-4`}>
            <div className={styles.showcaseCopyContainer}>
                <p className={`md:text-7xl md:my-8`}>Music <br /> Community <br /> Life</p>
                <p className={`lg:text-xl`}>The Sound is your source for curated live music in Rochester, NY <br/> and a catalyst for community.</p>
                <SubmitShowCTA />
            </div>
        </div>
    );
}