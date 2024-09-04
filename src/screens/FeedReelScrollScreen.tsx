import {debounce} from 'lodash';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  ViewToken,
} from 'react-native';
import tw from 'twrnc';

import {PostProps} from '../components/Post/Post.types';
import VideoItem from '../components/Video/VideoItem';
import fakeData from '../storage/database/post';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

const fetchData = async (
  offset: number,
  limit: number,
): Promise<PostProps[]> => {
  if (offset < 0 || offset >= fakeData.length) {
    throw new Error(`Error: offset ${offset} is out of range`);
  }

  const newData = fakeData.slice(offset, offset + limit);

  console.log('offset', offset);

  return newData;
};
export type FeedReelScrollScreenProps = {};
const FeedReelScrollScreen: React.FC<FeedReelScrollScreenProps> = () => {
  const [data, setData] = useState<PostProps[]>();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 0,
  }).current;

  const onViewableItemsChanged = useRef(
    debounce(({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentVisibleIndex(viewableItems[0].index || 0);
      }
    }),
  ).current;

  const getItemLayout = useCallback(
    (data: ArrayLike<PostProps> | null | undefined, index: number) => ({
      length: SCREEN_HEIGHT,
      offset: SCREEN_HEIGHT * index,
      index,
    }),
    [],
  );

  const removeDuplicates = (originalData: PostProps[]): PostProps[] => {
    const uniqueDataMap = new Map();
    originalData?.forEach(item => {
      if (!uniqueDataMap.has(item.id)) {
        uniqueDataMap.set(item.id, item);
      }
    });
    return Array.from(uniqueDataMap.values());
  };

  const fetchFeed = useCallback(
    debounce(async (offset: number) => {
      console.log('fetchFeed');
      try {
        setIsLoading(true);
        const newData = await fetchData(offset, 8);
        setOffset(offset + 8);
        if (newData?.length < 8) {
          setHasMore(false);
        }
        console.log('newData.length', newData.length);
        setData(prev => {
          return removeDuplicates([...(prev || []), ...newData]);
        });
      } catch (error) {
        console.error('fetchFeed: ', error);
      } finally {
        setIsLoading(false);
      }
    }, 200),
    [isLoading, hasMore, data],
  );

  useEffect(() => {
    fetchFeed(offset);
  }, []);

  const keyExtractor = useCallback((item: PostProps) => item.id.toString(), []);

  const renderVideoList = useCallback(
    ({index, item}: ListRenderItemInfo<PostProps>) => {
      console.log('item', item.id);
      console.log('SCREEN_HEIGHT', SCREEN_HEIGHT);

      return (
        // <View style={tw`flex-1 h-[${SCREEN_HEIGHT}]px`} key={index}>
        <VideoItem
          isVisible={currentVisibleIndex === index}
          item={item}
          preload={Math.abs(currentVisibleIndex + 5) >= index}
        />
        // </View>
      );
    },
    [currentVisibleIndex],
  );

  const memoizedValue = useMemo(
    () => renderVideoList,
    [currentVisibleIndex, data],
  );

  return (
    // <View>
    <FlatList
      data={data || []}
      keyExtractor={keyExtractor}
      renderItem={memoizedValue}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      pagingEnabled
      windowSize={2}
      disableIntervalMomentum
      removeClippedSubviews
      initialNumToRender={1}
      maxToRenderPerBatch={2}
      onEndReachedThreshold={0.1}
      decelerationRate="normal"
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      getItemLayout={getItemLayout}
      onEndReached={async () => {
        console.log('fetching');
        await fetchFeed(offset);
      }}
    />
    // </View>
  );
};
export default FeedReelScrollScreen;
