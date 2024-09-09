import {ReactVideoProps} from 'react-native-video';

import {VideoPlayerProps} from '../VideoPlayer/VideoPlayer.type';

export type VideoData = {
  id: number;
  source: ReactVideoProps['source'];
};

export type PostProps = {
  id: number;
  video: VideoPlayerProps;
  headerComponent?: JSX.Element;
  actionsContent?: JSX.Element;
  bodyContent?: JSX.Element | string;
  overlayComponent?: JSX.Element;
  onPressPost?: (videoData: VideoData) => void;
};

export type PostType = PostProps;

export type PostExposedInstanceValue = {
  itemHeight: number;
  play: () => void;
  stop: () => void;
  unload: () => void;
};
