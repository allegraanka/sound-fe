import axios from "axios";
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/posts/post.module.css';

export async function getStaticPaths() {
    const posts = await axios.get('http://localhost:1337/api/posts');
    console.log(posts.data.data);
    const paths = posts.data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const posts = await axios.get(`http://localhost:1337/api/posts/${params.id}`);
    return {
        props: {
            post: posts.data
        }
    }
}

const PostPage = ({ post }) => {
    return(
        <Layout>
            <div className={`py-4`}>
                <article className={``}>
                    <Link href='/posts'>
                        <a className={`uppercase`}>← Back to posts</a>
                    </Link>
                    <div className={`mt-12 mb-8`}>
                        <h1 className={`text-5xl`}>{post.data.attributes.title}</h1>
                        <p className={`uppercase text-sm`}>Written by <a href="#">Super User</a> on {post.data.attributes.publishedAt}. Posted in <a href="#">Blog</a></p>
                    </div>
                    <div className={`w-full lg:w-3/4`}>
                        <p className={`text-2xl my-4`}>{post.data.attributes.description}</p>
                        <p className={``}>{post.data.attributes.content}</p>
                    </div>
                </article>
                <div className={`my-8`}>
                    <span className={`text-lg`}>Did you enjoy this piece?</span>
                    <Link href='/posts'>
                        <a className={`uppercase mx-4`}>Read more</a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default PostPage;