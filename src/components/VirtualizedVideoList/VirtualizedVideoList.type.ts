import {VirtualizedListWithoutRenderItemProps} from 'react-native';

import {type PostType} from '../Post/Post.types';

export type VirtualizedVideoListProps<TItem> =
  VirtualizedListWithoutRenderItemProps<TItem> & {
    data: PostType[];
    paginated?: boolean;
    pagesNum?: number;
    viewAreaCoveragePercentThreshold?: number;
    fetchData?: (page: number) => Promise<void | number>;
    restStateOnblur?: boolean;
  };
