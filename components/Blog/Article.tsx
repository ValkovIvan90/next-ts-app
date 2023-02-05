import React from 'react'
import { IComment } from './Main'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Person, QueryBuilder, Title } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';

interface IProps {
  props: IComment
}

export default function Article({ props }: IProps) {
  const CommentCardWrapper = styled(Card)({
    minWidth: 275,
    '& .MuiTypography-h5': {
      fontSize: 20,
      fontWeight: 'bold',
    },
    '& .MuiTypography-h6': {
      fontStyle: 'italic',
      margin: 5
    },
    '& .MuiTypography-body1': {
      fontFamily: 'Arial',
    },
    '& .MuiTypography-caption': {
      margin: 5,
      fontSize: 18
    },
  });

  const IconAndText = styled('div')({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
  });
  const AuthorAndDate = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'center',
    margin: 10
  });

  return (
    <CommentCardWrapper>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body1" component="p">
          {props.description}
        </Typography>
        <AuthorAndDate>
          <IconAndText>
            <Person />
            <Typography variant="h6" component="h3">
              {props.author}
            </Typography>
          </IconAndText>
          <IconAndText>
            <QueryBuilder />
            <Typography variant="caption" color="textSecondary">
              {props.date}
            </Typography>
          </IconAndText>
        </AuthorAndDate>
      </CardContent>
    </CommentCardWrapper>
  );
}