import {FlashList} from '@shopify/flash-list';
import {debounce} from 'lodash';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  ViewToken,
} from 'react-native';
import tw from 'twrnc';

import fakeData from '../../storage/database/post';
import {PostProps, PostType} from '../Post/Post.types';
import VideoItem from '../Video/VideoItem';
export const SCREEN_HEIGHT = Dimensions.get('window').height;

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

const VirtualizedVideoList = ({}): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 0,
  }).current;

  const onViewableItemsChanged = useRef(
    debounce(({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentVisibleIndex(viewableItems[0].index || 0);
        console.log('viewableItems[0].index', viewableItems[0].index);
      }
    }),
  ).current;

  const renderVideoList = useCallback(
    ({index, item}: ListRenderItemInfo<PostProps>) => {
      console.log('item', item.id);
      console.log(
        'currentVisibleIndex === index',
        currentVisibleIndex === index,
      );

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

  useEffect(() => {
    setPosts(fakeData.slice(0, 10));
  }, []);

  const keyExtractor = useCallback((item: PostProps) => item.id.toString(), []);

  return (
    <View style={tw`flex-1`}>
      {posts.length ? (
        <FlatList<PostProps>
          data={posts}
          renderItem={renderVideoList}
          // estimatedItemSize={10}
          keyExtractor={keyExtractor}
          numColumns={1}
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          onEndReachedThreshold={0.1}
        />
      ) : null}
    </View>
  );
};

export default VirtualizedVideoList;
