
import styles from './tonight.module.css';

const Tonight = ({ shows }) => {
    console.log('shows inside tonight component--->', shows);

    const current = new Date();

    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}.${day}.${year}`;
        return formattedDate;
    }

    const showsTonight = shows.filter((show) => {
        const showDate = new Date(show.attributes.date);
        const formattedShowDate = formatDate(showDate);
        const formattedCurrentDate = formatDate(current);
        return formattedShowDate === formattedCurrentDate;
    });

    console.log('shows tonight object', showsTonight);

    return(
        <div className={styles.container}>
            <h2 className={styles.rochesterTonightTitle}>Rochester Tonight</h2>
            {showsTonight && showsTonight.map((show) => (
                <div key={show.attributes.id} className={`${styles.showCard} uk-card uk-card-hover uk-card-body`}>
                    <div className={styles.showDatePriceUnit}>
                        <div className={styles.showDate}>{formatDate(show.attributes.date)}</div>
                        <div className={styles.showPrice}>{show.attributes.ticketPrice}</div>
                    </div>
                    <div className={styles.showHeadlinerUnit}>
                        <div className={styles.showHeadliner}>{show.attributes.headliner}</div>
                        <div className={styles.showSupport}>{show.attributes.support}</div>
                        <div className={styles.showVenue}>{show.attributes.venue} {show.attributes.showTime}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tonight;