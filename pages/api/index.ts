// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getBlogs, getPosts } from "../../lib/mongo/fetchAllData";

export default async (req: NextApiRequest, res: NextApiResponse) => {


  if (req.method === "GET") {
    try {
      const blogs = await getBlogs();
      const posts = await getPosts();
      return res.status(200).json({ blogs, posts });
    } catch (err) {
      return res.status(500).json({ err: (err as Error).message });
    }
  }
  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed`);
};
