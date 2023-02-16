import { Db, Collection } from "mongodb";
import clientPromise from ".";
import { IComment, IPost } from "../../models/interfaces";

let client;
let db: Db;
let blogs: Collection<IComment[]>;
let posts: Collection<IPost[]>;

async function init() {
    if (db) return;
    try {
        client = await clientPromise;
        db = await client.db();
        blogs = await db.collection("blogs");
        posts = await db.collection("posts");

    } catch (error) {
        throw new Error("failed to connect to database")
    }
}

; (async () => {
    await init();
})();

export async function getBlogs() {
    try {
        if (!blogs) await init();
        const blogResult = await blogs
            .find({})
            .limit(20)
            .toArray();

        return blogResult;

    } catch (error) {
        return { error: "Failed to fetch resources" };
    }
}
export async function getPosts() {
    try {
        if (!posts) await init();
        const postResult = await posts
            .find({})
            .limit(20)
            .toArray();
        return postResult;

    } catch (error) {
        return { error: "Failed to fetch resources" };
    }
}