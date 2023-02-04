// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IPost } from "./interfaces/post";
import axios from "axios";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IPost>>
) {
  res.status(200).json({ name: "John Doe" });
}