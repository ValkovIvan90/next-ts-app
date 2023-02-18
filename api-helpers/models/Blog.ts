import mongoose, { Document, Schema, model } from 'mongoose';
import { IBlog } from '../../inter/interfaces';


const blogSchema = new Schema<IBlog & Document>({
    author: { type: String, required: true, maxlength: 30 },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    title: { type: String, required: true, minlength: 5 }
});

export const blogModel = mongoose.models.Blog || model<IBlog & Document>('Blog', blogSchema);