import React from 'react';
import {DimensionValue, StyleProp, ViewStyle} from 'react-native';
import {VideoPlayerProps as CorePlayerProps} from 'react-native-media-console';

type disableControlsType = {
  default: boolean;
  fullscreen: boolean;
};

export type PlayerProps = CorePlayerProps &
  Pick<VideoPlayerProps, 'playerInfo' | 'setFullscreen'> & {
    disableControls?: boolean;
    setPaused: React.Dispatch<React.SetStateAction<boolean>>;
    videoContainerStyle?: StyleProp<ViewStyle>;
  };

export type PlayerInfoObject = {
  elapsedSecs: number;
};

export type VideoPlayerProps = CorePlayerProps &
  VideoSizeProps & {
    autoplay?: boolean;
    thumb?: string;
    disableControlsWhen?: disableControlsType;
    setFullscreen?: React.Dispatch<React.SetStateAction<boolean>>;
    playerInfo?: React.MutableRefObject<PlayerInfoObject>;
    videoContainerStyle?: StyleProp<ViewStyle>;
  };

export type VideoSizeProps = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
};
