export interface IResult {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageLabel: string;
}
export interface IPost {
  posts: {
    [key: string]: {
      title: string;
      description: string;
      date: string;
      image: string;
      imageLabel: string;
    }
  },
  comments: [
    {
      author: string;
      date: string;
      description: string;
      title: string;
    }
  ]
}

export interface IComment {
  author: string;
  description: string;
  date: string;
  title: string
}
export interface MainProps {
  comments: Array<IComment>
  title: string;
}