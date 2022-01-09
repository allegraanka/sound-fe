import styles from '../styles/home.module.css';
import PrelaunchLanding from '../components/prelaunch-landing/prelaunch-landing.component';
import EmailCapture from '../components/email-capture/email-capture.component';

const Home = () => {
  return (
    <div className={styles.container}>
      <PrelaunchLanding />
      <EmailCapture />
    </div>
  );
}

export default Home;