import React, { useMemo } from 'react';
import { groupBy } from 'lodash';
import moment from 'moment';
import { Box } from '@material-ui/core';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Comment } from './Comment';
import { SortBySelector } from './SortBySelector';
import { SortEnum } from '../config/SortEnum';
import { FilterEnum } from 'src/config/FilterEnum';
export const CommentsGridPage = () => {
  // fetching comments
  const comments = useQuery(
    'comments',
    async () => {
      const response = await axios.request({
        method: 'get',
        url: 'https://www.reddit.com/r/wallstreetbets/comments.json',
        params: {
          sort: 'new',
          limit: 30, // not 100 for now because of bad performance of fetching user details individually
        },
      });

      return response.data?.data?.children?.map((obj) => obj.data);
    },
    {
      keepPreviousData: true, // so the data doesnt disappear
      refetchInterval: 15 * 1000,
    }
  );

  // fetching authors
  const authors = useQuery(
    ['authors', { comments: comments.data }],
    async ({ queryKey: [, { comments }] }) => {
      // TODO
      // better to batch fetch the list but not sure how to do that ATM...
      const authorsDetails = await Promise.all(
        comments.map(async (comment) => {
          const response = await axios.get(`https://www.reddit.com/user/${comment.author}/about/.json`);
          return response.data.data;
        })
      );

      return authorsDetails;
    },
    {
      enabled: !!comments.data,
    }
  );

  // grouping the comments by author criteria
  // for now grouping by hardcoded account ages
  const commentGroups = useMemo(() => {
    if (authors.data && comments.data) {
      const groups = groupBy(comments.data, (comment) => {
        const commentAuthorDetails = authors.data.find((author) => comment.author === author.name);
        const authorAge = moment(commentAuthorDetails.created_utc * 1000);
        if (authorAge.isBefore(moment().subtract(6, 'years'))) {
          return 1;
        } else if (authorAge.isBefore(moment().subtract(3, 'years'))) {
          return 2;
        } else if (authorAge.isBefore(moment().subtract(1, 'years'))) {
          return 3;
        } else {
          return 4;
        }
      });

      return groups;
    }

    return null;
  }, [authors, comments]);

  return (
    <>
      {/* saved in local storage or a cookie */}
      <SortBySelector
        configEnum={SortEnum}
        initialSort={SortEnum.ACCOUNT_AGE.label}
        sorterTitle="SORT COMMENTS BY:"
      />
      <SortBySelector
        configEnum={FilterEnum}
        initialSort={FilterEnum.GLOBAL.label}
        sorterTitle="FILTER COMMENTS BY:"
      />

      {!!commentGroups && (
        <Box style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }} container spacing={3}>
          {[1, 2, 3, 4].map((groupIndex) => {
            return (
              <Box key={groupIndex} style={{ minWidth: '25%', maxHeight: '100vh', overflow: 'auto' }}>
                {commentGroups[groupIndex]?.map?.((comment) => {
                  const author = authors.data.find((author) => comment.author === author.name);
                  return <Comment key={comment.id} comment={comment} author={author} />;
                })}
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default CommentsGridPage;
