import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/shows/shows.module.css';
import Link from 'next/link';
import ShowComponent from '../../components/show-component/show.component';

export async function getStaticProps() {
    const shows = await axios.get('http://localhost:1337/api/shows');
  
    return {
      props: {
        shows: shows.data.data
      }
    }
  }

const ShowsPage = ({ shows }) => {
    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={styles.showsContainer}>
                <div className={styles.innerShowsContainer}>
                <h1 className={styles.showsPageTitle}>Upcoming Shows</h1>
                    {shows.map((show) => (
                        <div key={show.attributes.id}>
                            <Link href={`/shows/${show.id}`}>
                                <a>See details →</a>
                            </Link>
                            <ShowComponent show={show}/>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>  
    );
}

export default ShowsPage;