import Layout from '../components/Layout/Layout';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <Layout title='The Sound | About Us'>
            <div className={`px-4`}>
                <h1 className={`text-black text-5xl`}>About The Sound</h1>
                <div className={`w-full lg:w-3/4`}>
                    <p className={`my-3`}>Ibaby synth actually tote bag normcore iceland. Dreamcatcher locavore hella banjo health goth. Venmo asymmetrical meh cloud bread, sartorial iceland twee poutine deep v. Vice ennui cardigan gastropub pitchfork microdosing, keytar retro neutra. Intelligentsia crucifix mixtape disrupt chambray listicle stumptown lo-fi kickstarter mumblecore jean shorts. Occupy lomo kickstarter hashtag shaman swag. Vegan lo-fi fixie copper mug quinoa coloring book hammock.</p>
                    <p className={`my-3`}>Succulents yr umami seitan aesthetic locavore blue bottle squid yuccie marfa gluten-free cornhole jianbing. Tacos activated charcoal trust fund humblebrag fixie. Tilde vice letterpress swag bushwick. Health goth leggings activated charcoal prism, VHS thundercats iPhone 8-bit.</p>
                </div>
            </div>
        </Layout>
    );
}