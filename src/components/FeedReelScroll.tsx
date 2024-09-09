import {debounce} from 'lodash';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';

import {PostProps} from './Post/Post.types';
import VideoItem from './Video/VideoItem';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export type FeedReelScrollProps = {
  fetchData: (offset: number, limit: number) => Promise<PostProps[]>;
};

const FeedReelScroll: React.FC<FeedReelScrollProps> = ({fetchData}) => {
  const [data, setData] = useState<PostProps[]>();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  const viewabilityConfig = useRef<ViewabilityConfig>({
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
      if (isLoading) {
        return;
      }
      try {
        setIsLoading(true);
        const newData = await fetchData(offset, 8);
        setOffset(offset + 8);
        if (newData?.length < 8) {
          setHasMore(false);
        }
        setData(prev => removeDuplicates([...(prev || []), ...newData]));
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
      return (
        <View style={styles.media} key={index}>
          <VideoItem
            isVisible={currentVisibleIndex === index}
            item={item}
            preload={Math.abs(currentVisibleIndex + 5) >= index}
          />
          <View style={styles.bodyContent}>
            <Text>{item.bodyContent}</Text>
          </View>
        </View>
      );
    },
    [currentVisibleIndex],
  );

  const memoizedValue = useMemo(
    () => renderVideoList,
    [currentVisibleIndex, data],
  );

  return (
    <View style={styles.media}>
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
          await fetchFeed(offset);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bodyContent: {
    position: 'absolute',
    bottom: 100,
    left: 5,
    paddingHorizontal: 20,
  },
});
export default FeedReelScroll;
