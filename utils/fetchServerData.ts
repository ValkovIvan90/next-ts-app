import { getBlogs, getPosts } from "../lib/mongo/fetchAllData";

export async function fetchData() {
    try {

        const blogs = await getBlogs();
        const posts = await getPosts();

        return { blogs, posts }
    } catch (error) {
        throw new Error((error as Error).message);
    }
}