import {PostProps} from 'components/Post/Post.types';
import React, {FC} from 'react';

import FeedReelScroll from '../components/FeedReelScroll';
import fakeData from '../storage/database/post';

const FeedReel: FC = () => {
  const fetchData = async (
    offset: number,
    limit: number,
  ): Promise<PostProps[]> => {
    if (offset < 0 || offset >= fakeData.length) {
      throw new Error(`Error: offset ${offset} is out of range`);
    }

    const newData = fakeData.slice(offset, offset + limit);

    return newData;
  };
  return <FeedReelScroll fetchData={fetchData} />;
};

export default FeedReel;
