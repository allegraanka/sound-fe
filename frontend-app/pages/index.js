import axios from 'axios';
import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import FeaturedPosts from '../components/FeaturedPosts/FeaturedPosts';
import EmailCapture from '../components/email-capture/email-capture.component';
import Link from 'next/link';
import qs from 'qs';

export async function getStaticProps() {
  const shows = await axios.get('http://localhost:1337/api/shows');
  
  const query = qs.stringify({
      populate: '*',
  }, {
      encodeValuesOnly: true
  });
  const posts = await axios.get(`http://localhost:1337/api/posts?${query}`);
  const featuredPosts = posts.data.data.filter(post => post.attributes.featured === true);

  console.log('hello from the outside,,,,,,', featuredPosts);


  return {
    props: {
      shows: shows.data.data,
      featured: featuredPosts
    }
  }
}

const HomePage = ({ shows, featured }) => {
  console.log('now we are on the inside-----', featured);
  return (
    <Layout>
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`p-4`}>
          <div className={`text-2xl my-2 w-fit md:text-left`}>The Sound is your source for curated live music in Rochester, NY and a music community incubator initiative. Learn more <Link href='/about'><a>about us</a></Link>.</div>
          <Tonight shows={shows}/>
        </div>
        <FeaturedPosts featured={featured}/>
      </div>
      <EmailCapture />
    </Layout>
  );
}

export default HomePage;