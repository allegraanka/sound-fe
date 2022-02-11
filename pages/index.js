import axios from 'axios';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import SubmitShowCTA from '../components/submit-show-component/submit-show.component';
import HalfPage from '../components/half-page/half-page.component';

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
      <div className={styles.container}>
        <Tonight shows={shows} className={styles.half}/>
        <div className={`${styles.homepageContainer} half`}>
          <p className={styles.homepageMainCopy}>Get connected <br/> with your people</p>
          <p className={styles.homepageSubCopy}>The Sound is your source for curated live music in Rochester, NY</p>
          <SubmitShowCTA />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;