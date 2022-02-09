import axios from "axios";
import Link from 'next/link';
import styles from '../../styles/posts/post.module.css';

const Post = ({ post }) => {
    return(
        <div className={styles.postContainer}>
            <article className={`${styles.innerPostContainer} uk-article`}>
                <Link href='/posts'>
                    <a className={`${styles.backButton} uk-button uk-button-text`}>← Back to posts</a>
                </Link>
                <h1 className="uk-article-title">{post.data.attributes.title}</h1>
                <p className="uk-article-meta">Written by <a href="#">Super User</a> on {post.data.attributes.publishedAt}. Posted in <a href="#">Blog</a></p>
                <p className="uk-text-lead">{post.data.attributes.description}</p>
                <p>{post.data.attributes.content}</p>
                <div className="uk-grid-small uk-child-width-auto" uk-grid>
                    <div>
                        <Link href="/posts">
                            <a className="uk-button uk-button-text">Read more</a>
                        </Link>
                    </div>
                    <div>
                        <a className="uk-button uk-button-text" href="#">5 Comments</a>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Post;

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