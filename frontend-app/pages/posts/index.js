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
        <Layout title='The Sound | Blog'>
          <div className={`w-full md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Sound Board</h1>
                <div className={`text-xl`}>Welcome to Sound Board, a blog where we cover shows, local music news, and the occasional long-form feature story on something remarkable and rad in Rochester music.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <Link href={`/posts/${post.id}`}>
                        <a>
                          <h2 className={`text-2xl text-red-dark hover:text-red-light`}>{post.attributes.title}</h2>
                        </a>
                      </Link>
                      <div>{post.attributes.description}</div>
                    </div>
              ))}
          </div>
        </Layout>
    );
}

export default PostsPage;