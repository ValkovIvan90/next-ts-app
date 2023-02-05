import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

interface IComment {
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
  comments.splice(0, 1);

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
        {comments.map((comment, i) => (
          <Markdown className="markdown" key={comment.title}>
            {comment}
          </Markdown>
        ))}
      </>
    </Grid>
  );
}