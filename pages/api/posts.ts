// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "./interfaces/post";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPost>
) {
  res.status(200).json({ name: "John Doe" });
}