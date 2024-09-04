import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, ViewToken} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import tw from 'twrnc';

import {VirtualizedVideoListProps} from './VirtualizedVideoList.type';
import Post from '../Post/Post';
import {
  PostExposedInstanceValue,
  PostProps,
  PostType,
} from '../Post/Post.types';
import Spinner from '../Spinner/Spinner';

const VirtualizedVideoList = <TItem,>({
  data,
  paginated,
  pagesNum,
  viewAreaCoveragePercentThreshold,
  fetchData,
  initialNumToRender = 5,
  maxToRenderPerBatch = 5,
  windowSize = 5,
  restStateOnblur,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  ...props
}: VirtualizedVideoListProps<TItem>): JSX.Element => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const mediaRefs = useRef<PostExposedInstanceValue[]>([]);
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const scrollDirection = useSharedValue('');

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (lastContentOffset.value > event.contentOffset.y) {
        if (isScrolling.value) {
          scrollDirection.value = 'UP';
        }
      } else if (lastContentOffset.value < event.contentOffset.y) {
        if (isScrolling.value) {
          scrollDirection.value = 'DOWN';
        }
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: () => {
      isScrolling.value = true;
    },
    onEndDrag: () => {
      isScrolling.value = false;
    },
  });

  const onViewableItemsChanged = useCallback(
    ({
      changed,
      viewableItems,
    }: {
      changed: ViewToken[];
      viewableItems: ViewToken[];
    }) => {
      let keyToPlay: ViewToken['key'];
      if (viewableItems.length > 1) {
        if (scrollDirection.value === 'DOWN') {
          keyToPlay = viewableItems[viewableItems.length - 1].key;
        } else if (scrollDirection.value === 'UP' || !scrollDirection.value) {
          keyToPlay = viewableItems[viewableItems.length - 2].key;
        }
      }
      viewableItems.forEach(({key}: ViewToken) => {
        const cell = mediaRefs.current[+key];
        if (keyToPlay) {
          if (keyToPlay === key) {
            cell?.play();
          } else {
            cell?.stop();
          }
        } else {
          cell?.play();
        }
      });

      changed.forEach(({key, isViewable}) => {
        const cell = mediaRefs.current[+key];
        if (cell) {
          if (!isViewable) {
            cell.stop();
          }
        }
      });
    },
    [],
  );

  const handleOnEndReached = async () => {
    if (currentPage < pagesNum! && !refreshing) {
      try {
        setRefreshing(true);
        const res = await fetchData?.(currentPage + 1);
        if (res) {
          setCurrentPage(currentPage + 1);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setRefreshing(false);
      }
    }
  };

  const renderItem = useCallback(
    ({item: itemProps}: {item: PostType}): JSX.Element => (
      <Post
        {...itemProps}
        video={{
          ...itemProps.video,
          videoContainerStyle: props.contentContainerStyle,
        }}
        ref={(postRef: PostExposedInstanceValue) =>
          (mediaRefs.current[itemProps.id] = postRef)
        }
      />
    ),
    [],
  );

  const memoizedValue = useMemo(() => renderItem, [data, currentPage]);

  const maxItemNum = 100;
  const itemsCount = data.length;
  useEffect(() => {
    setPosts(prev => {
      const oldData =
        prev.length <= maxItemNum - itemsCount ? prev : prev.slice(itemsCount);
      return [...oldData, ...data];
    });
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        restStateOnblur && setPosts([]);
      };
    }, [restStateOnblur]),
  );

  const SpinnerComponent = (loading: boolean) => (loading ? <Spinner /> : null);

  const onRefresh = async () => {
    const initialPage = 1;
    setPosts([]);
    setCurrentPage(initialPage);
    await fetchData?.(initialPage);
  };
  const keyExtractor = useCallback((item: PostProps) => item.id.toString(), []);

  return (
    <View style={tw`flex-1`}>
      {posts.length ? (
        <Animated.FlatList<PostProps>
          data={posts}
          windowSize={windowSize}
          renderItem={memoizedValue}
          keyExtractor={keyExtractor}
          onEndReachedThreshold={0.1}
          onEndReached={paginated ? handleOnEndReached : undefined}
          initialNumToRender={initialNumToRender}
          maxToRenderPerBatch={maxToRenderPerBatch}
          refreshing={refreshing}
          viewabilityConfig={{
            minimumViewTime: 100,
            viewAreaCoveragePercentThreshold,
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          onScroll={scrollHandler}
          removeClippedSubviews
          onRefresh={onRefresh}
          ListFooterComponent={SpinnerComponent(refreshing)}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          {...props}
        />
      ) : null}
    </View>
  );
};

export default VirtualizedVideoList;
