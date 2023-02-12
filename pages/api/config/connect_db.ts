import { MongoClient, MongoClientOptions } from 'mongodb';
import { NextApiResponse } from 'next';

export const client = new MongoClient(<string>process.env.MONGO_URL, <MongoClientOptions>{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


export async function connectMongo(res: NextApiResponse) {
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
}
