import axios from 'axios';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import Showcase from '../components/Showcase/Showcase';

export async function getStaticProps() {
  const shows = await axios.get('http://localhost:1337/api/shows');

  return {
    props: {
      shows: shows.data.data
    }
  }
}

const HomePage = ({ shows }) => {
  console.log('shows in home component: ', shows);
  return (
    <Layout>
      <div className={`grid grid-cols-1 md:grid-cols-6 gap-8`}>
        <Showcase />
        <Tonight shows={shows}/>
      </div>
    </Layout>
  );
}

export default HomePage;