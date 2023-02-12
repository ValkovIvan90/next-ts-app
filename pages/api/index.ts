// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectMongo, client } from "./config/connect_db";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectMongo(res);

  try {
    const db = client.db("blog");
    const collections = await db.listCollections().toArray();
    res.status(200).json({ data: collections });
    client.close();
  } catch (err) {
    console.error(err);
  }
};
