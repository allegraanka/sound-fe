import axios from "axios";
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import styles from '../../styles/shows/show.module.css';

export async function getStaticPaths() {
    const shows = await axios.get('http://localhost:1337/api/shows');
    console.log(shows.data.data);
    const paths = shows.data.data.map((show) => {
        return {params: {id: show.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const shows = await axios.get(`http://localhost:1337/api/shows/${params.id}`);
    return {
        props: {
            show: shows.data
        }
    }
}

const ShowPage = ({ show }) => {
    return(
        <Layout>
            <div className={styles.showContainer}>
                <div className={styles.innerShowContainer}>
                    <Link href='/shows'>
                        <a className={`${styles.backButton} uk-button uk-button-text`}>← Back to shows</a>
                    </Link>
                    <div className={styles.showDataContainer}>
                        <p className={styles.showPromoter}>{show.data.attributes.promoter}</p>
                        <h1 className={styles.showHeadliner}>{show.data.attributes.headliner}</h1>
                        <p className={styles.showSupport}>{show.data.attributes.support}</p>
                        <p className={styles.showTimeAndDoors}>Doors {show.data.attributes.doorTime} | Show {show.data.attributes.showTime}</p>
                    </div>
                    {/* <Image src={show.data.attributes.image} alt='band photo'/> */}
                </div>
            </div>
        </Layout>
    );
}

export default ShowPage;