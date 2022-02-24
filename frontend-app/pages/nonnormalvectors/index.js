import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import qs from 'qs';
import Layout from '../../components/Layout/Layout';

export async function getStaticProps() {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const nnvpodcasts = await axios.get(`http://localhost:1337/api/posts?${query}`);

    const nnvpodcastsFiltered = nnvpodcasts.data.data.filter(post => post.attributes.type === 'nonnormalvectors');
  
    return {
      props: {
        posts: nnvpodcastsFiltered
      }
    }
  }

const SoundCheckPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Non Normal Vectors Podcast'>
          <div className={`w-full md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Non Normal Vectors</h1>
                <div className={`text-xl`}>Non Normal Vectors is a podcast by Mike. And we are collaborating with him.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <Image 
                          src={`http://localhost:1337${post.attributes.image.data.attributes.formats.small.url}`}
                          width={post.attributes.image.data.attributes.formats.small.width}
                          height={post.attributes.image.data.attributes.formats.small.height}
                          alt='non normal vectors podcast episode image'
                        />
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

export default SoundCheckPage;