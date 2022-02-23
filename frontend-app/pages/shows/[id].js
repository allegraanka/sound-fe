import axios from "axios";
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import styles from '../../styles/shows/show.module.css';

export async function getStaticPaths() {
    const shows = await axios.get('http://localhost:1337/api/shows');

    const paths = shows.data.data.map(show => ({
        params: {id: show.id.toString()}
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    const shows = await axios.get(`http://localhost:1337/api/shows/${id}`);

    return {
        props: {
            show: shows.data
        }
    }
}

const ShowPage = ({ show }) => {
    return(
        <Layout>
            <div className={`w-full p-12 `}>
                <Link href='/shows'>
                    <a className={`uppercase`}>← Back to shows</a>
                </Link>
                <div className={`my-12 flex flex-col justify-around items-center md:flex-row`}>
                    <div className={styles.showDataContainer}>
                        <div className={`my-8`}>
                            <p className={styles.showPromoter}>{show.data.attributes.promoter}</p>
                            <h1 className={`text-5xl`}>{show.data.attributes.headliner}</h1>
                            <p className={`text-2xl`}>{show.data.attributes.support}</p>
                        </div>
                        <div className={``}>
                            <div className={`text-2xl uppercase font-semibold`}>{show.data.attributes.venue}</div>
                            {show.data.attributes.doorTime ? 
                            <span className={`text-xl`}>Doors {show.data.attributes.doorTime} | </span> : ''}
                            <span className={`text-xl`}>Show {show.data.attributes.showTime}</span>
                        </div>
                    </div>
                    <div className={`my-12`}>
                        <Image src={show.data.attributes.image ? show.data.attributes.image : '/images/default.jpg'} width={350} height={150} alt='band photo'/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ShowPage;