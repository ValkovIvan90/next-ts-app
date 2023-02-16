import { MongoClient, MongoClientOptions } from 'mongodb';

declare global {
    interface Global {
        _mongoClientPromise?: Promise<MongoClient>;
    }
}

const globalAny: Global = global as any;


const options: MongoClientOptions = {};

const URI = process.env.MONGO_URL;

if (!URI) throw new Error('Please add your Mongo URI to the configuration');

let client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== 'production') {
    if (!globalAny._mongoClientPromise) {
        globalAny._mongoClientPromise = client.connect();
    }
    clientPromise = globalAny._mongoClientPromise
} else {
    clientPromise = client.connect();
};

export default clientPromise;