import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core';
import MarkdownIt from 'markdown-it';
import {
  Card,
  CardContent,
  CardHeader,
  //CardActionArea,
  Typography,
  Divider,
} from '@material-ui/core';

const md = new MarkdownIt();

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    padding: 15,
    backgroundColor: theme.palette.background.paper,
  },
  cardHeader: {
    height: 75,
    padding: theme.spacing(1),
  },
  comment_title: {
    color: theme.palette.text.primary,

    textDecoration: 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left',
    width: '100%',
    maxHeight: 65,
    padding: 'auto',
    overflow: 'hidden',
    '&:hover': {
      transition: 'all .5s',
      textDecoration: 'underline',
    },
  },
  comment_body: {
    minHeight: 50,
    lineHeight: '200%',
    textAlign: 'left',
    color: theme.palette.text.primary,
  },
  divider: {
    background: theme.palette.background.dark,
  },
  author: {
    display: 'block',
    textAlign: 'left',
    width: '100%',
    paddingTop: theme.spacing(1),
  },
}));

// return time since creation ex: a few seconds ago
const getCreatedDuration = (createdAt) => {
  const seconds = moment().unix() - createdAt;
  return moment.duration(seconds, 'seconds').humanize();
};

export const Comment = ({ comment, author, theme }) => {
  const classes = useStyles(theme);
  const authorAge = moment(author.created_utc * 1000);
  const commentAge = getCreatedDuration(comment.created_utc);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.comment_title}>
            <a className={classes.comment_title} href={comment.link_permalink} target="_blank" rel="noreferrer">
              {comment.link_title}
            </a>
          </Typography>
        }
        //subheader={moment(comment.created_utc * 1000).format('LLLL')}
      />
      <Divider className={classes.divider} variant="fullWidth" />
      <CardContent style={{ paddingBottom: 0 }}>
        {/* link_permalink: "https://www.reddit.com/r/wallstreetbets/comments/l7et6x/technical_error_gain_market_order_filled_for_gme/"
          link_title: "Technical error gain, market order filled for GME at $2,600 a share"
          link_url: "https://i.redd.it/jvkojrsv86e61.jpg" */}
        <Typography variant="h5" className={classes.comment_body}>
          <div dangerouslySetInnerHTML={{ __html: md.render(comment.body) }} />
        </Typography>
        {comment.total_awards_received > 0 ? `${comment.total_awards_received} Awards` : ''}
        <Divider className={classes.divider} style={{ marginTop: 10 }} />
        <Typography variant="p2" className={classes.author}>
          {`u/${author.name}`}
          <span style={{ paddingLeft: 20 }}>{commentAge} ago</span>
        </Typography>
        <Typography variant="p2" color="textSecondary" className={classes.author}>
          {author.comment_karma} Karma • Member Since: {authorAge.format('MMM D YYYY')}
        </Typography>
      </CardContent>
    </Card>
  );
};
