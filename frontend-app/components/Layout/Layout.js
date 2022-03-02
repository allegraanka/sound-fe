import Head from 'next/head';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';

export default function Layout({ title, keywords, description, children }) {
    const router = useRouter();

    return (
        <div className={`debug-screens`}>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>

            <Navigation />
            <div className={`min-h-screen mt-6`}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

Layout.defaultProps = {
    title: 'Discover live music in Rochester, NY',
    description: 'Your source for curated live music in Rochester, NY',
    keywords: 'music, show, shows, live music, dj, events, music scene, rochester, rochester new york'
}