import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Main from '../components/Blog/Main';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Footer';
import { fetchAllPost } from '../utils/posts';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];


const posts = ["post1", "post2", "post3"];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

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
  result: {
    [key: string]: {
      title: string;
      description: string;
      date: string;
      image: string;
      imageLabel: string;
    }
  };
}

export default function HomePage(props: IPost) {

  const { result }: IPost = props;



  const arr: IResult[] = Object.entries(result).map(([key, value]) =>

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
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
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
  let result;
  try {
    result = await fetchAllPost();
  } catch (e) {
    return (e as Error).message;
  }

  return {
    props: {
      result
    },
  };

}