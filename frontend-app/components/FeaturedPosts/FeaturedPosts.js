import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPosts({ featured }) {
    return(
        <div className={`p-4`}>
            <div className={`my-4`}>
                <h1 className={`text-3xl`}>What&apos;s happening in Rochester</h1>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2`}>
                {featured && featured.map((post) => {
                    return (
                        <div key={post.id} className={`my-4 md:mx-4 col-span-1`}>
                            <div className={``}>
                                <Image
                                    className={`rounded-lg`}
                                    src={`http://localhost:1337${post.attributes.image.data.attributes.formats.small.url}`}
                                    width={post.attributes.image.data.attributes.formats.small.width}
                                    height={post.attributes.image.data.attributes.formats.small.height}
                                    alt='featured article image'
                                />
                            </div>
                            <div className={`px-2`}>
                                {post.attributes.type === 'post' ? <Link href='/posts'><a className={`text-sm uppercase`}>Sound Board</a></Link> : ''}
                                {post.attributes.type === 'soundcheck' ? <Link href='/soundcheck'><a className={`text-sm uppercase`}>Sound Check</a></Link> : ''}
                                {post.attributes.type === 'nonnormalvectors' ? <Link href='/nonnormalvectors'><a className={`text-sm uppercase`}>Non Normal Vectors</a></Link> : ''}
                                <Link href={`/posts/${post.id}`}>
                                    <a className={`text-xl block`}>{post.attributes.title}</a>
                                </Link>
                                <p className={`text-sm`}>{post.attributes.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}