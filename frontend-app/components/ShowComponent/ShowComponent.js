import Image from 'next/image';
import Link from 'next/link';
import styles from './ShowComponent.module.css';

const ShowComponent = ({ show }) => {

    console.log('show from showcomponent --->', show.id);

    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const day = date.getDate();
        const month = date.getMonth()+1;
        const year = date.getFullYear();
        const formattedDate = `${month}.${day}.${year}`;
        return formattedDate;
    }

    return(
        <div className={`flex my-4 w-full text-black`}>
            <div className={`px-4`}>
                <div className={styles.showDate}>{formatDate(show.attributes.date)}</div>
                <div className={`text-2xl`}>{show.attributes.showTime}</div>
                <div className={`text-2xl`}>{show.attributes.ticketPrice}</div>
            </div>
            <div className={`text-xl md:text-lg`}>
                <Link href={`/shows/${show.id}`}>
                    <a><div className={`text-2xl`}>{show.attributes.headliner}</div></a>
                </Link>
                <div className={styles.showSupport}>{show.attributes.support}</div>
                <div className={`uppercase`}>{show.attributes.venue}</div>
            </div>
        </div>
    );
}

export default ShowComponent;