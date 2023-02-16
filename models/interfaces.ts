import { ObjectId, WithId } from "mongodb";

export interface IResult {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageLabel: string;
}
export interface MainProps {
  comments: Array<IComment>
  title: string;
}
export interface IPost {
  _id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
  imageLabel: string;
}

export interface IComment {
  _id: string;
  author: string;
  date: Date;
  description: string;
  title: string;
}

export interface IWP {
  key: number;
  post: WithId<IPost>;
}
export interface IWB {
  title: string;
  comments: WithId<IComment[]>
}