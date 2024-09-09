import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';

import {PostType} from '../components/Post/Post.types';
import VirtualizedVideoList from '../components/VirtualizedVideoList/VirtualizedVideoList';
import fakeData from '../storage/database/post';
import {delay} from '../utils/helpers';

const FeedScreen: FC = () => {
  const pageLength = 20;
  const pagesNum = fakeData.length / pageLength;
  const [data, setData] = useState<PostType[]>(fakeData.slice(0, pageLength));

  const fetchData = async (page: number): Promise<void | number> => {
    if (page > pagesNum) {
      throw new Error(`Error: page ${page} does not exist`);
    }
    await delay(2000);
    const end = page * pageLength;
    const start = end - pageLength;
    const newData = fakeData.slice(start, end);
    console.log('newData', newData);

    setData(newData);
    return 1;
  };

  return (
    <SafeAreaView style={tw`h-full`}>
      <VirtualizedVideoList
        data={data}
        fetchData={fetchData}
        paginated={true}
        pagesNum={pagesNum}
        viewAreaCoveragePercentThreshold={60}
        windowSize={11}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
