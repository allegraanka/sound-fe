import axios from 'axios';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import Tonight from '../components/tonight/tonight.component';
import Showcase from '../components/Showcase/Showcase';
import EmailCapture from '../components/email-capture/email-capture.component';

export async function getStaticProps() {
  const shows = await axios.get('http://localhost:1337/api/shows');
  const submissions = await axios.get('http://localhost:1337/api/submissions');

  const chosenSubmissions = submissions.data.data.filter((show) => {
    return show.attributes.chosen === true;
  });

  const displayShows = shows.data.data.concat(chosenSubmissions);

  return {
    props: {
      shows: displayShows,
    }
  }
}

const HomePage = ({ shows }) => {
  return (
    <Layout>
      <div className={`grid grid-cols-1 lg:grid-cols-6 gap-6`}>
        <Showcase />
        <Tonight shows={shows}/>
      </div>
      <EmailCapture />
    </Layout>
  );
}

export default HomePage;