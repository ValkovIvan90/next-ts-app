// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "./config/connect_db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas");
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB Atlas:", error);
    res.status(500).json({ error: (error as Error).message });
  } finally {
    await client.close();
    console.log("Successfully disconnected from MongoDB Atlas");
  }
};
