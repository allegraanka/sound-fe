import axios from "axios";
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import qs from 'qs';

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
    const query = qs.stringify({
        populate: '*', 
      }, {
        encodeValuesOnly: true,
      });
    const shows = await axios.get(`http://localhost:1337/api/shows/${id}?${query}`);
    console.log('what comes back ', shows);

    return {
        props: {
            show: shows.data
        }
    }
}

const ShowPage = ({ show }) => {
    return(
        <Layout>
            <div className={`w-full p-4`}>
                <Link href='/shows'>
                    <a className={`uppercase`}>← Back to shows</a>
                </Link>
                <div className={`my-8`}>
                    <Image 
                        src={`http://localhost:1337${show.data.attributes.image.data.attributes.formats.medium.url}`} 
                        width={`${show.data.attributes.image.data.attributes.formats.medium.width}`} 
                        height={`${show.data.attributes.image.data.attributes.formats.medium.height}`} 
                        alt='blog post header image'
                    />
                    <div className={`my-8`}>
                        <p className={``}>{show.data.attributes.promoter}</p>
                        <h1 className={`text-5xl`}>{show.data.attributes.headliner}</h1>
                        <p className={`text-2xl`}>{show.data.attributes.support}</p>
                    </div>
                    <div className={``}>
                        <div className={`text-2xl uppercase font-semibold`}>{show.data.attributes.venue}</div>
                        {show.data.attributes.doorTime ? <span className={`text-xl`}>Doors {show.data.attributes.doorTime} | </span> : ''}
                        <span className={`text-xl`}>Show {show.data.attributes.showTime}</span>
                        <div className={`text-2xl`}>{show.data.attributes.ticketPrice}</div>
                    </div>
                    <div className={`my-8`}>
                        {show.data.attributes.description}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ShowPage;