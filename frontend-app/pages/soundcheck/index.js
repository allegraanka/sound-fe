import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import qs from 'qs';

export async function getStaticProps() {
    const query = qs.stringify({
        populate: '*',
    }, {
        encodeValuesOnly: true
    });
    const soundchecks = await axios.get(`http://localhost:1337/api/posts?${query}`);

    const filteredSoundchecks = soundchecks.data.data.filter(post => post.attributes.type === 'soundcheck');
  
    return {
      props: {
        posts: filteredSoundchecks
      }
    }
  }

const SoundCheckPage = ({ posts }) => {
    return(
        <Layout title='The Sound | Sound Check Artist Spotlights'>
          <div className={`w-full md:w-3/4 xl:w-1/2`}>
              <div className={`my-8`}>
                <h1 className={`text-5xl`}>Sound Check Artist Spotlights</h1>
                <div className={`text-xl`}>Welcome to our rapid-fire series that spotlights artists with questions that we hope will be fun to answer and even more fun to read.</div>
              </div>
              {posts.map((post) => (
                    <div key={post.id} className={`my-4`}>
                      <Image 
                        src={`http://localhost:1337${post.attributes.image.data.attributes.formats.small.url}`}
                        width={post.attributes.image.data.attributes.formats.small.width}
                        height={post.attributes.image.data.attributes.formats.small.height}
                        alt='soundcheck header photo'
                      />
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