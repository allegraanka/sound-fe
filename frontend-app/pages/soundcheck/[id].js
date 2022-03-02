import Link from 'next/link';
import NextImage from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import { fetchAPI } from '../../lib/api';

const SoundCheckPage = ({ post }) => {
    // Date formatter
    const formatDate = (dateInput) => {
        var options = {  weekday: 'short', month: 'numeric', day: 'numeric'};
        const date = new Date(dateInput).toLocaleDateString('en-us', options);
        return date;
    }

    // Get and format publish date from post object
    const publishDate = formatDate(post.attributes.publishedAt);

    // Get categories off post object
    const categories = post.attributes.categories.data.map((category) => {
        return category.attributes.name;
    });
    
    // Get writers from post object
    const writers = post.attributes.writers.data.map((writer) => {
        return writer.attributes.name;
    });
    
    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
            <div className={`p-4`}>
                <article className={``}>
                    <Link href='/soundcheck'>
                        <a className={`uppercase`}>← Back to Sound Check</a>
                    </Link>
                    <div className={`mt-12 mb-8`}>
                        <NextImage image={post.attributes.image}/>
                        <h1 className={`text-5xl mt-4`}>{post.attributes.title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">{writers}</a> on {publishDate}. {categories.join(', ')}</p>
                    </div>
                    <div className={`w-full lg:w-3/4`}>
                        <p className={`text-2xl my-4`}>{post.attributes.description}</p>
                        <p className={``}>{post.attributes.content}</p>
                    </div>
                </article>
                <div className={`my-8`}>
                    <span className={`text-lg`}>Was this fun to read?</span>
                    <Link href='/soundcheck'>
                        <a className={`uppercase mx-4`}>Read more</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const soundchecks = await fetchAPI('/posts');
    const paths = soundchecks.data.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const soundchecks = await fetchAPI('/posts', {
        filters: {
            id: params.id,
        },
        populate: '*',
    });
    
    return {
        props: {
            post: soundchecks.data[0]
        }
    }
}

export default SoundCheckPage;