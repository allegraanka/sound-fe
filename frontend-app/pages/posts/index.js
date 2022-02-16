import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/posts/posts.module.css';

export async function getStaticProps() {
    const posts = await axios.get('http://localhost:1337/api/posts');
    console.log(posts);
  
    return {
      props: {
        posts: posts.data.data
      }
    }
  }

const PostsPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Sound Check Blog'>
          <div className={styles.postsContainer}>
            <div className={styles.innerPostsContainer}>
                <div className={styles.pageCopyContainer}>
                  <h1 className={styles.postsPageTitle}>Sound Check</h1>
                  <p>Sound Check is our rapid fire questions series where we get to know our local bands a bit better by finding out what&apos;s in their fridge.</p>
                </div>
                {posts.map((post) => (
                      <div key={post.id} className={styles.singlePostContainer}>
                        <Link href={`/posts/${post.id}`}>
                          <a>
                            <h2>{post.attributes.title}</h2>
                          </a>
                        </Link>
                        <div>{post.attributes.description}</div>
                      </div>
                ))}
            </div>
          </div>
        </Layout>
    );
}

export default PostsPage;