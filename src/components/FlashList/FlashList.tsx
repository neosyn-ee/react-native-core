import {
  FlashList as FlashListComponent,
  FlashListProps as FlashListComponentProps,
} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

type FlashListPropsExtra = {
  paginated?: boolean;
  pagesNum?: number;
  fetchData?: (page: number) => Promise<void | number>;
  isLoading?: boolean;
  textEmptyData: string;
};

export type FlashListProps<TItem> = FlashListPropsExtra &
  FlashListComponentProps<TItem>;

const ListEmptyComponent = ({
  isLoading,
  textEmptyData,
}: Pick<FlashListPropsExtra, 'textEmptyData' | 'isLoading'>) => (
  <View>
    {!isLoading ? (
      <Text>{textEmptyData}</Text>
    ) : (
      <ActivityIndicator size="large" />
    )}
  </View>
);

const FlashList = <TItem,>({
  data,
  paginated,
  pagesNum,
  fetchData,
  isLoading = true,
  textEmptyData,
  ...props
}: FlashListProps<TItem>) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [dataList, setDataList] = useState<TItem[]>([]);

  useEffect(() => {
    if (data) {
      const itemsCount = data.length;
      setDataList(prev => {
        const oldData =
          prev.length <= (props.estimatedItemSize ?? 0) - itemsCount
            ? prev
            : prev.slice(itemsCount);
        return [...oldData, ...data];
      });
    }
  }, [data, props.estimatedItemSize]);

  const handleOnEndReached = async () => {
    if (pagesNum) {
      if (currentPage < pagesNum && !refreshing) {
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
    }
  };
  const onRefresh = async () => {
    const initialPage = 1;
    setDataList([]);
    setCurrentPage(initialPage);
    await fetchData?.(initialPage);
  };

  return (
    <FlashListComponent<TItem>
      data={dataList}
      onEndReachedThreshold={0}
      onEndReached={paginated ? handleOnEndReached : undefined}
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListEmptyComponent={
        <ListEmptyComponent
          isLoading={isLoading}
          textEmptyData={textEmptyData}
        />
      }
      {...props}
    />
  );
};
export default FlashList;
