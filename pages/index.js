import styles from '../styles/home.module.css';
import PrelaunchLanding from '../components/prelaunch-landing/prelaunch-landing.component';
import PrelaunchAbout from '../components/prelaunch-about/prelaunch-about.component';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <PrelaunchLanding />
        <PrelaunchAbout />
      </div>
    </>
  );
}

export default Home;