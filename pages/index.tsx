import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Main from '../components/Blog/Main';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Footer';
import { fetchAllPost, fetchAllComment } from '../utils/posts';
import { sections, localData } from '../data/local_data';


const theme = createTheme();

interface IResult {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  imageLabel: string;
}

interface IPost {
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

export default function HomePage(props: IPost) {

  const { posts, comments }: IPost = props;

  const arr: IResult[] = Object.entries(posts).map(([key, value]) =>

  ({
    id: key,
    title: value.title,
    description: value.description,
    date: value.date,
    image: value.image,
    imageLabel: value.imageLabel
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog  Austria" sections={sections} />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={4}>
            {arr.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" comments={comments} />
            <Sidebar
              title={localData.sidebar.title}
              description={localData.sidebar.description}
              archives={localData.sidebar.archives}
              social={localData.sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  let posts;
  let comments;
  try {
    posts = await fetchAllPost();
    comments = await fetchAllComment();
  } catch (e) {
    return (e as Error).message;
  }

  return {
    props: {
      posts,
      comments
    },
  };

}