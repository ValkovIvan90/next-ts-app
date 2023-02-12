import * as React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Article from './Article';
import { MainProps } from '../../models/interfaces';


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