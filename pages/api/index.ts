// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from '../../api-helpers/utils';
import { getAllDataModels } from "../../api-helpers/controllers/blogData";
import Logging from "../../library/Logging";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb();

  /** Log the req */
  Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    /** Log the res */
    Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
  });


  
  if (req.method === "GET") {
    return await getAllDataModels(req, res);
  }
};
