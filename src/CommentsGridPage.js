import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { Comment } from './components/Comment';
import { SortBySelector, SortEnum } from './components/SortBySelector';

import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:5000/';

export const CommentsGridPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('new comment', (data) => {
      setComments((comments) => {
        return [data, ...comments];
      });
    });
  }, []);

  return (
    <>
      {/* saved in local storage or a cookie */}
      <SortBySelector initialSort={SortEnum.ACCOUNT_AGE} />

      <Grid container spacing={3}>
        <Grid key={1} item xs={12} sm={6} md={3}>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentsGridPage;
