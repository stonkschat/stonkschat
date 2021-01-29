import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    padding: 15,
    backgroundColor: theme.palette.background.paper,
  },
  comment_title: {
    color: theme.palette.text.secondary,
  },
  comment_body: {
    color: theme.palette.text.primary,
  },
}));

export const Comment = ({ comment, author, theme }) => {
  const classes = useStyles(theme);
  const authorAge = moment(author.created_utc * 1000);
  console.log(comment);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <a className={classes.comment_title} href={comment.link_permalink} target="_blank" rel="noreferrer">
            {comment.link_title}
          </a>
        }
        //subheader={moment(comment.created_utc * 1000).format('LLLL')}
      />
      <CardContent>
        {/* link_permalink: "https://www.reddit.com/r/wallstreetbets/comments/l7et6x/technical_error_gain_market_order_filled_for_gme/"
          link_title: "Technical error gain, market order filled for GME at $2,600 a share"
          link_url: "https://i.redd.it/jvkojrsv86e61.jpg" */}
        <Typography variant="h4" className={classes.comment_body}>
          <div dangerouslySetInnerHTML={{ __html: md.render(comment.body) }} />
        </Typography>
        {comment.total_awards_received > 0 ? `${comment.total_awards_received} Awards` : ''}
      </CardContent>
      <CardActionArea>
        {`u/${author.name}`}
        <br />
        {author.comment_karma} Karma * Member Since: {authorAge.format('MMM D YYYY')}
      </CardActionArea>
    </Card>
  );
};
