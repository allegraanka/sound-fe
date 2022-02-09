import axios from 'axios';
import styles from '../styles/Home.module.css';
import Tonight from '../components/tonight/tonight.component';

export async function getStaticProps() {
  const shows = await axios.get('http://localhost:1337/api/shows');

  return {
    props: {
      shows: shows.data.data
    }
  }
}

const Home = ({ shows }) => {
  console.log('shows in home component: ', shows);
  return (
    <>
      <div className={styles.container}>
        <Tonight shows={shows}/>
      </div>
    </>
  );
}

export default Home;