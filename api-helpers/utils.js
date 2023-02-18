import mongoose from "mongoose";
mongoose.set('strictQuery', false);

export const connectDb = async () => {

    if (!process.env.MONGO_URL) throw new Error('Please add your Mongo URI to the configuration');

    await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("DB connected"))
        .catch((err) => console.log(err));
};