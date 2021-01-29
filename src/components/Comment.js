import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: 15,
  },
}));

export const Comment = ({ comment, author }) => {
  const classes = useStyles();
  const authorAge = moment(author.created_utc * 1000);
  return (
    <div className={classes.root}>
      <div>
        {/* link_permalink: "https://www.reddit.com/r/wallstreetbets/comments/l7et6x/technical_error_gain_market_order_filled_for_gme/"
        link_title: "Technical error gain, market order filled for GME at $2,600 a share"
        link_url: "https://i.redd.it/jvkojrsv86e61.jpg" */}
        <a href={comment.link_permalink} target="_blank" rel="noreferrer">
          {comment.link_title}
        </a>
      </div>
      <div>
        <strong>Comment Date:</strong> {moment(comment.created_utc * 1000).format('LLLL')}
      </div>
      <div>
        <strong>Author:</strong> {author.name}
      </div>
      <div>
        <strong>Karma:</strong> {author.comment_karma} / {author.awarder_karma} / {author.awardee_karma}
      </div>
      <div>
        <strong>Account Created:</strong> {authorAge.format('LLLL')}
      </div>

      <div>{comment.body}</div>
    </div>
  );
};
