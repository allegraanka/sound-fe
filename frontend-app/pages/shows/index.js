import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/shows/shows.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ShowComponent from '../../components/ShowComponent/ShowComponent';

export async function getStaticProps() {
    const shows = await axios.get('http://localhost:1337/api/shows');

    const upcomingShows = shows.data.data.filter((show) => {
        const showDate = new Date(show.attributes.date).toLocaleDateString();
        const current = new Date().toLocaleDateString();
        if (showDate >= current && show.attributes.chosen === true) {
            return show;
        };
    });

    const datetimeSorted = upcomingShows.sort((a,b) => {
        const x = new Date(a.attributes.date);
        const y = new Date(b.attributes.date);
        return x - y;
    });
  
    return {
      props: {
        shows: datetimeSorted,
        revalidate: 1,
      }
    }
  }

const ShowsPage = ({ shows }) => {
    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={`mb-12`}>
                <div className={styles.innerShowsContainer}>
                <h1 className={`text-5xl text-black`}>Upcoming Shows</h1>
                {shows.length === 0 && <p>There are no upcoming shows right now!</p>}
                    {shows.map((show) => (
                        <div key={show.id}>
                            <div className={`md:flex items-center`}>
                                <ShowComponent show={show}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>  
    );
}

export default ShowsPage;