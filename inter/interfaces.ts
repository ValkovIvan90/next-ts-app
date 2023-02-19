import { ObjectId } from "mongoose";

export interface IResult {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageLabel: string;
}
export interface IPost {
  _id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  imageLabel: string;
}

export interface IBlog {
  _id: ObjectId;
  author: string;
  date: Date;
  description: string;
  title: string;
}
