import React, { useState } from 'react';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useRouter } from 'next/router';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IPost } from '../../inter/interfaces';
import { dateParse } from '../../library/parseDate';

const useStyles = makeStyles({
  root: {
    color: 'red',
    fontSize: '20px',
    fontWeight: 600,
  },
});


export default function PostDetails() {
  const classes = useStyles();

  const router = useRouter();
  const [post, setPost] = useState<IPost>();

  const [data, setData] = useLocalStorage<{ posts: IPost[] }>('data', { posts: [] });

  React.useEffect(() => {
    if (router.query.postId) {
      setPost(data.posts.find((e: IPost) => e._id == router.query.postId));
    }
  }, [router.query.postId]);

  return (
    <Card className={classes.root}>
      <CardMedia component="img"
        sx={{ width: 600, height: 600, display: { xs: 'none', sm: 'block' } }}
        image={post?.image} alt={post?.imageLabel} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post?.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {dateParse(post?.date)}
        </Typography>
        <Typography variant="body1">{post?.description}</Typography>
      </CardContent>
    </Card>
  );
}