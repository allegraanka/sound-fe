import GhostContentAPI from '@tryghost/content-api';

const ghostContentApi = new GhostContentAPI({
    url: process.env.GHOST_API_URL,
    key: process.env.GHOST_CONTENT_API_KEY,
    version: 'v3'
});

export async function getAllPosts() {
    return await ghostContentApi.posts
    .browse({
        limit: 'all'
    })
    .catch(error => {
        console.log(`There was an error fetching with getAllPosts in ghost.js: ${error}`);
    });
}

export async function getSinglePostBySlug(slug) {
    return await ghostContentApi.posts
    .read (
        { slug },
        { formats: ['html'] }
    )
    .catch(error => {
        console.log(`There was an error fetching with getSinglePostBySlug in ghost.js: ${error}`);
    });
}