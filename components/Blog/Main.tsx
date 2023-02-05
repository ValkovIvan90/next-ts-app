import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Article from './Article';

export interface IComment {
  author: string;
  description: string;
  date: string;
  title: string
}
interface MainProps {
  comments: Array<IComment>
  title: string;
}

export default function Main(props: MainProps) {
  const { comments, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {comments.map((e, i) => {
          if (i != 0) {
            return <Article key={e.title} props={e} />
          } else {
            null
          }
        })}
      </>
    </Grid>
  );
}