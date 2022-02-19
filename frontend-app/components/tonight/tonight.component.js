import Link from 'next/link';
import ShowComponent from '../ShowComponent/ShowComponent';
import styles from './tonight.module.css';

const Tonight = ({ shows }) => {
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

    return(
        <div className={`lg:col-span-2`}>
            <div className={`text-3xl`}>{formatDate(current)}</div>
            <h2 className={`text-5xl text-white`}>Rochester Tonight</h2>
            {showsTonight && showsTonight.map((show) => (
                <div key={show.attributes.id}>
                    <ShowComponent show={show}/>
                </div>
            ))}
            {shows.length > 0 && (
                <Link href='/shows'>
                    <a>All upcoming shows →</a>
                </Link>
            )}
        </div>
    );
}

export default Tonight;