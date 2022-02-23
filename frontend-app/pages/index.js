import axios from 'axios';
import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import EmailCapture from '../components/email-capture/email-capture.component';
import Link from 'next/link';

export async function getStaticProps() {
  const shows = await axios.get('http://localhost:1337/api/shows');
  // const posts = await axios.get('http://localhost:1337/posts');


  return {
    props: {
      shows: shows.data.data,
    }
  }
}

const HomePage = ({ shows }) => {
  return (
    <Layout>
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`p-4`}>
          <div className={`text-2xl my-2 w-fit md:text-left`}>The Sound is your source for curated live music in Rochester, NY and a music community incubator initiative. Learn more <Link href='/about'><a>about us</a></Link>.</div>
          <Tonight shows={shows}/>
        </div>
        <div className={`p-4`}>
          featured posts placeholder
        </div>
      </div>
      <EmailCapture />
    </Layout>
  );
}

export default HomePage;