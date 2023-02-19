import type { NextApiHandler } from "next";
import Logging from "../../library/Logging";
import { blogModel } from '../models/Blog';
import { postModel } from '../models/Post';


export const getAllDataModels: NextApiHandler = async (req, res) => {
    let blogs;
    let posts;

    try {
        blogs = await blogModel.find().lean();
        posts = await postModel.find().lean();
    } catch (err) {
        Logging.error(`Error - METHOD: [${req.method}] - URL: [${req.url}] - Error: [blogData line 15]`);
        return new Error((err as Error).message);
    }

    if (!blogs || !posts) {
        return res.status(500).json({ message: "Internal Server Error" })
    }

    if (blogs.length === 0 || posts.length === 0) {
        return res.status(404).json({ message: "No comments found!" })
    }

    return res.status(200).json({ blogs, posts });
}