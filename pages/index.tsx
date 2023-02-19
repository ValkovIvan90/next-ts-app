import * as React from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../components/Header';
import MainFeaturedPost from '../components/Blog/MainFeaturedPost';
import FeaturedPost from '../components/Blog/FeaturedPost';
import Main from '../components/Blog/Main';
import Sidebar from '../components/Blog/Sidebar';
import Footer from '../components/Footer';

import { sections, localData } from '../data/local_data';
import { getAllBlogData } from '../api-helpers/frontend/utils';
import { IBlog, IPost } from '../inter/interfaces';
import { GetStaticProps } from 'next';
import { useLocalStorage } from '../hooks/useLocalStorage';

const theme = createTheme();


export default function HomePage({ posts, blogs }: { blogs: IBlog[], posts: IPost[] }) {
    const setDataToLocal = { 'posts': posts, 'blogs': blogs };
    const data = useLocalStorage<{ blogs: IBlog[], posts: IPost[] }>("blog_data", setDataToLocal);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog  Austria" sections={sections} />
                <main>
                    <MainFeaturedPost />
                    <Grid container spacing={4}>
                        {data[0].posts.map((post: IPost) => (
                            <FeaturedPost key={post._id} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} sx={{ mt: 3 }}>
                        <Main title="From the firehose" blogs={data[0].blogs} />
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

export const getStaticProps: GetStaticProps<{ blogs: IBlog[], posts: IPost[] }> = async () => {
    const { posts, blogs } = await getAllBlogData();

    return {
        props: {
            posts: await posts,
            blogs: await blogs,
        }
    };
}