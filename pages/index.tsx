import * as React from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { WithId } from 'mongodb';

import Header from '../components/Header';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Main from '../components/Blog/Main';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Footer';

import { IComment, IPost } from '../models/interfaces';
import { sections, localData } from '../data/local_data';
import { fetchData } from '../utils/fetchServerData';


const theme = createTheme();

export default async function HomePage() {

  const { blogs, posts } = await fetchData();

  if ('error' in posts) {
    return <div>{posts.error}</div>;
  }
  const postData: WithId<IPost[]>[] | { error: string; } = posts;
  const blogData: WithId<IComment[]>[] | { error: string; } = blogs;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog  Austria" sections={sections} />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={4}>
            {postData.map((post: any, i) => (
              <FeaturedPost key={i} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" comments={blogData} />
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