import styles from './half-page.module.css';

const HalfPage = ({ heading, subcopy}) => {
    return(
        <div className={styles.halfPageContainer}>
            <div className={styles.innerHalfPageContainer}>
                <h1>{heading}</h1>
                <p>{subcopy}</p>
            </div>
        </div>
    );
}

export default HalfPage;