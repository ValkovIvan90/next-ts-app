import { MongoClient, MongoClientOptions } from 'mongodb';

const client = new MongoClient(<string>process.env.MONGO_URL, <MongoClientOptions>{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default client;