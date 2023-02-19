
export interface IResult {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageLabel: string;
}
export interface IPost {
  title: string;
  description: string;
  date: Date;
  image: string;
  imageLabel: string;
}

export interface IBlog {
  author: string;
  date: Date;
  description: string;
  title: string;
}
