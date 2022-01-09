import { getAllPosts, getSinglePostBySlug } from "../lib/ghost";

export async function getStaticPaths() {
    const posts = await getAllPosts();
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const data = await getSinglePostBySlug(slug);
    return { props: { data } };
}

export default function Post({ data }) {
    return(
        <article>
            <h1>{data.title}</h1>
            <p>{`slug: ${data.slug}`}</p>
            <div dangerouslySetInnerHTML={{ __html: data.html }}/>
        </article>
    );
}