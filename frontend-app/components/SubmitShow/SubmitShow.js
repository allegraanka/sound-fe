import styles from './SubmitShow.module.css';
import Link from 'next/link';

const SubmitShowCTA = () => {

    return(
        <div className={`text-left my-12`}>
            <p className={`text-xl`}>Have a show coming up?</p>
            <Link href='/shows/submit'>
                <a className={`text-3xl uppercase`}>Let us know</a>
            </Link>
        </div>
    );
}

export default SubmitShowCTA;