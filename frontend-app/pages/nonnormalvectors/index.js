import Link from 'next/link';
import NextImage from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import { fetchAPI } from '../../lib/api';

const SoundCheckPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
          <div className={`w-full px-4 md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Non Normal Vectors</h1>
                <div className={`text-xl`}>Non Normal Vectors is a podcast by Mike. And we are collaborating with him.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <NextImage image={post.attributes.image}/>
                      <Link href={`/nonnormalvectors/${post.id}`}>
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

export async function getStaticProps() {
  const nnvpodcasts = await fetchAPI(`/posts`, { populate: '*', encodeValuesOnly: true });
  const nnvpodcastsFiltered = nnvpodcasts.data.filter(post => post.attributes.type === 'nonnormalvectors');

  return {
    props: {
      posts: nnvpodcastsFiltered,
      revalidate: 1,
    }
  }
}

export default SoundCheckPage;