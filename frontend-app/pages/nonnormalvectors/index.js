import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

export async function getStaticProps() {
    const nnvpodcasts = await axios.get('http://localhost:1337/api/posts');

    const nnvpodcastsFiltered = nnvpodcasts.data.data.filter(post => post.attributes.type === 'nonnormalvectors');
  
    return {
      props: {
        posts: nnvpodcastsFiltered
      }
    }
  }

const SoundCheckPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
          <div className={`w-full md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Non Normal Vectors</h1>
                <div className={`text-xl`}>Non Normal Vectors is a podcast by Mike. And we are collaborating with him.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <Link href={`/soundcheck/${post.id}`}>
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

export default SoundCheckPage;