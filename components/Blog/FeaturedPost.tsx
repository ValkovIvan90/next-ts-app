import * as React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { IPost } from '../../inter/interfaces';
import { dateParse } from '../../library/parseDate';

export default function FeaturedPost({ post }: { post: IPost }) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea href={`/posts/${post._id}`}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {dateParse(post.date)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description.substring(0, 150) + "  . . ."}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, height: 220, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}