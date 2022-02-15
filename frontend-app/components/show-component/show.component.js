import Image from 'next/image';
import styles from './show.module.css';

const ShowComponent = ({ show }) => {

    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}.${day}.${year}`;
        return formattedDate;
    }

    return(
        <div className={styles.showCard}>
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
    );
}

export default ShowComponent;