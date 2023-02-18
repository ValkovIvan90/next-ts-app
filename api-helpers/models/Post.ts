import mongoose, { Document, Schema, model, mongo } from 'mongoose';
import { IPost } from '../../inter/interfaces';


const postSchema = new Schema<IPost & Document>({
    title: { type: String, required: true, minlength: 5 },
    description: { type: String, required: true, minlength: 10 },
    date: { type: Date, required: true },
    image: { type: String, required: true },
    imageLabel: { type: String, required: true, minlength: 5, maxlength: 50 }
});


export const postModel = mongoose.models.Post || model<IPost & Document>('Post', postSchema);