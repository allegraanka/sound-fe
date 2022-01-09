import Link from 'next/link'
import { getAllPosts } from '../lib/ghost';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}

export default function Featured({ posts }) {
    return (
      <>
      <h1>Featured</h1>
       <ul>
        {posts.map((post) => (
          <li key={post.uuid}>
            <Link href={`/${post.slug}`}>
              <a>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      </>
    );
  }