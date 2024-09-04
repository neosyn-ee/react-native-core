import {PostProps} from 'components/Post/Post.types';
import ReelCardItem from 'components/Reel/ReelCardItem';
import React, {useEffect, useState} from 'react';
import {Animated, FlatList, ListRenderItemInfo, View} from 'react-native';
import tw from 'twrnc';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/constants';

import fakeData from '../../storage/database/post';

export type GlobalFeedProps = {};
const GlobalFeed: React.FC<GlobalFeedProps> = () => {
  const pageLength = 20;
  const pagesNum = fakeData.length / pageLength;

  const [data, setData] = useState(fakeData.slice(0, pageLength));
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page: number): Promise<void | number> => {
    setIsLoading(true);
    if (page > pagesNum) {
      throw new Error(`Error: page ${page} does not exist`);
    }
    const end = page * pageLength;
    const start = end - pageLength;
    const newData = fakeData.slice(start, end);
    setData(newData);
    setIsLoading(false);

    return 1;
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  const renderItem = ({index, item}: ListRenderItemInfo<PostProps>) => {
    const vertialShift = index % 2 === 0 ? -20 : 20;
    return (
      <Animated.View style={{transform: [{translateY: vertialShift}]}}>
        <ReelCardItem
          isLoading={isLoading}
          item={item}
          onPressReel={async () => {
            const copyArray = Array.from(data);
            const result = await moveToFirst(copyArray, index);
          }}
        />
      </Animated.View>
    );
  };

  return (
    <Animated.View style={tw`flex-1 items-center`}>
      <View
        style={tw`w-${SCREEN_WIDTH * 5} h-${
          SCREEN_HEIGHT * 2.9
        } justify-center items-center`}>
        {isLoading ? (
          <FlatList
            // @ts-ignore
            data={Array.from({length: 16})}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            pinchGestureEnabled
            scrollEnabled={false}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
            pinchGestureEnabled
            scrollEnabled={false}
          />
        )}
      </View>
    </Animated.View>
  );
};
export default GlobalFeed;
