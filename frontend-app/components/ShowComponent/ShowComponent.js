import Image from 'next/image';
import Link from 'next/link';
import styles from './ShowComponent.module.css';

const ShowComponent = ({ show }) => {
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    return(
        <div className={`flex my-6 w-full text-black`}>
            <div className={`px-2 mr-4 min-w-fit`}>
                <div className={``}>{formatDate(show.attributes.date)}</div>
                <div className={`text-xl`}>{show.attributes.showTime}</div>
                <div className={`text-xl`}>{show.attributes.ticketPrice}</div>
            </div>
            <div className={``}>
                <Link href={`/shows/${show.id}`}>
                    <a><div className={`text-2xl`}>{show.attributes.headliner}</div></a>
                </Link>
                <div className={styles.showSupport}>{`w/ ${show.attributes.support}`}</div>
                <div className={`text-xl uppercase`}>{show.attributes.venue}</div>
            </div>
        </div>
    );
}

export default ShowComponent;