import axios from 'axios';
import styles from '../../styles/shows/shows.module.css';

export async function getStaticProps() {
    const shows = await axios.get('http://localhost:1337/api/shows');
  
    return {
      props: {
        shows: shows.data.data
      }
    }
  }

const Shows = ({ shows }) => {
    return(
        <div className={styles.showsContainer}>
            <div className={styles.innerShowsContainer}>
            <h1 className={styles.showsPageTitle}>Upcoming Shows</h1>
                {shows.map((show) => (
                    <>
                        <div className={styles.showHeadliner}>{show.attributes.headliner}</div>
                        <div className={styles.showSupport}>{show.attributes.support}</div>
                        <div className={styles.showVenue}>{show.attributes.venue}</div>
                        <div className={styles.showPrice}>{show.attributes.ticketPrice}</div>
                    </>
                ))}
            </div>
        </div>  
    );
}

export default Shows;