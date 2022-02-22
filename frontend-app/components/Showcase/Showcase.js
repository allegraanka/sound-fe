import Link from 'next/link';
import SubmitShowCTA from '../SubmitShow/SubmitShow';

export default function Showcase() {
    return (
        <div className={`px-4 lg:col-span-4`}>
            <div className={``}>
                <div className={`text-left`}>
                    <span className={`text-5xl md:text-7xl font-black block`}>What are you<br/>doing tonight?</span>
                    {/* <span className={`text-3xl md:text-5xl font-thin tracking-tighter uppercase block`}>Community</span>
                    <span className={`text-5xl md:text-7xl uppercase block`}>Life</span><br/> */}
                </div>
                
                <div className={`text-lg my-2 w-fit md:text-2xl md:text-left xl:w-3/4`}>The Sound is your source for curated live music in Rochester, NY and a music community incubator initiative. Learn more <Link href='/about'><a>about us</a></Link>.</div>
                <SubmitShowCTA />
            </div>
        </div>
    );
}