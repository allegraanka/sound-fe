import Layout from '../components/Layout/Layout';
import styles from '../styles/About.module.css';

export default function AboutPage() {
    return (
        <Layout title='The Sound | About Us'>
            <div className={styles.aboutContainer}>
                <h1>About The Sound</h1>
                <p className={styles.textBlock}>Ibaby synth actually tote bag normcore iceland. Dreamcatcher locavore hella banjo health goth. Venmo asymmetrical meh cloud bread, sartorial iceland twee poutine deep v. Vice ennui cardigan gastropub pitchfork microdosing, keytar retro neutra. Intelligentsia crucifix mixtape disrupt chambray listicle stumptown lo-fi kickstarter mumblecore jean shorts. Occupy lomo kickstarter hashtag shaman swag. Vegan lo-fi fixie copper mug quinoa coloring book hammock.</p>
                <p className={styles.textBlock}>Succulents yr umami seitan aesthetic locavore blue bottle squid yuccie marfa gluten-free cornhole jianbing. Tacos activated charcoal trust fund humblebrag fixie. Tilde vice letterpress swag bushwick. Health goth leggings activated charcoal prism, VHS thundercats iPhone 8-bit.</p>
            </div>
        </Layout>
    );
}