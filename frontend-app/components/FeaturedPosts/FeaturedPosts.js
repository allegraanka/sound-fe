import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPosts({ featured }) {
    return(
        <div className={`p-4`}>
            <div className={`my-4`}>
                <h1 className={`text-3xl`}>Featured Content</h1>
                <Link href='/posts'><a>Sound Board →</a></Link>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2`}>
                {featured && featured.map((post) => {
                    return(
                        <div className={`m-4 col-span-1`}>
                            <Image
                                className={`rounded-lg`}
                                src={`http://localhost:1337${post.attributes.image.data.attributes.formats.small.url}`}
                                width={post.attributes.image.data.attributes.formats.small.width}
                                height={post.attributes.image.data.attributes.formats.small.height}
                                alt='featured article image'
                            />
                            <div className={`px-2`}>
                                <h1 className={``}>{post.attributes.title}</h1>
                                <p>{post.attributes.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}