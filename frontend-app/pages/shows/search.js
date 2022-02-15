import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/shows/shows.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ShowComponent from '../../components/show-component/show.component';
import qs from 'qs';
import { useRouter } from 'next/router';

export async function getServerSideProps({ query: {term}}) {
    const query = qs.stringify({
        filters: {
            $or: [
                {
                    headliner: {
                        $containsi: term
                    },
                },
                {
                    support: {
                        $containsi: term
                    },
                },
                {
                    venue: {
                        $contains: term
                    },
                },
            ]
        }
    })
    const shows = await axios.get(`http://localhost:1337/api/shows?${query}`);
  
    return {
      props: {
        shows: shows.data.data
      }
    }
  }

const SearchPage = ({ shows }) => {
    const router = useRouter();

    return(
        <Layout title='The Sound | Upcoming Shows'>
            <div className={styles.showsContainer}>
                <div className={styles.innerShowsContainer}>
                <h1 className={styles.showsPageTitle}>Search results for {router.query.term}</h1>
                {shows.length === 0 && <p>Sorry! Nothing matched that search.</p>}
                    {shows.map((show) => (
                        <div key={show.id}>
                            <Link href={`/shows/${show.id}`}>
                                <a>See details →</a>
                            </Link>
                            <div className={styles.showUnit}>
                                <div className={styles.imageWrapper}>
                                    <Image src={show.attributes.image ? show.attributes.image : '/images/default.jpg'} width={170} height={100} alt='band photo'/>
                                </div>
                                <ShowComponent show={show}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>  
    );
}

export default SearchPage;