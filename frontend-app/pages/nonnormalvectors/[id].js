import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import qs from 'qs';

export async function getStaticPaths() {
    const nnvEpisodes = await axios.get(`http://localhost:1337/api/posts`);
    
    const paths = nnvEpisodes.data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const nnvEpisodes = await axios.get(`http://localhost:1337/api/posts/${params.id}?${query}`);
    return {
        props: {
            post: nnvEpisodes.data
        }
    }
}

const NonNormalVectorsPage = ({ post }) => {
    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date
    const publishDate = formatDate(post.data.attributes.publishedAt);

    // Get categories off post object
    const categories = post.data.attributes.categories.data.map((category) => {
        return category.attributes.name;
    });
    
    const writers = post.data.attributes.writers.data.map((writer) => {
        return writer.attributes.name;
    });
    // TO DO process response from post, create cleaner variables for data in FE code below
    // MAP over arrays in response to gather categories, writers, etc
    
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
            <div className={`py-4`}>
                <article className={``}>
                    <Link href='/nonnormalvectors'>
                        <a className={`uppercase`}>← Back to Episodes</a>
                    </Link>
                    <div className={`mt-12 mb-8`}>
                        <Image 
                            src={`http://localhost:1337${post.data.attributes.image.data.attributes.formats.medium.url}`} 
                            width={post.data.attributes.image.data.attributes.formats.medium.width} 
                            height={post.data.attributes.image.data.attributes.formats.medium.height} 
                            alt='sound check artist profile photo'
                        />
                        <h1 className={`text-5xl mt-4`}>{post.data.attributes.title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}. {categories.join(', ')}</p>
                    </div>
                    <div className={`w-full lg:w-3/4`}>
                        <p className={`text-2xl my-4`}>{post.data.attributes.description}</p>
                        <p className={``}>{post.data.attributes.content}</p>
                    </div>
                </article>
                <div className={`my-8`}>
                    <span className={`text-lg`}>Did you like this?</span>
                    <Link href='/nonnormalvectors'>
                        <a className={`uppercase mx-4`}>Read more</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default NonNormalVectorsPage;