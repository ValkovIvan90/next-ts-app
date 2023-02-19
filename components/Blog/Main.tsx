import * as React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Article from './Article';


export default function Main({ title, comments }: any) {

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
        {/* {comments.map((e) => {
          return <Article key={e._id} props={e} />
        })} */}
      </>
    </Grid>
  );
}