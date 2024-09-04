import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import convertToProxyURL from 'react-native-video-cache';
import tw from 'twrnc';

import {PostProps} from '../Post/Post.types';

export type VideoItemProps = {
  item: PostProps;
  isVisible: boolean;
  preload: boolean;
};
const VideoItem: React.FC<VideoItemProps> = ({isVisible, item, preload}) => {
  const [paused, setPaused] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setIsPaused(!isVisible);
    if (!isVisible) {
      setPaused(null);
      setVideoLoaded(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isFocused) {
      setIsPaused(true);
    }
    if (isFocused && isVisible) {
      setIsPaused(false);
    }
  }, [isFocused]);

  const handlerVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <View style={tw`h-[${SCREEN_HEIGHT}px] w-[${SCREEN_WIDTH}px] grow flex-1`}>
      <View
        style={tw`absolute top-0 left-0 bottom-0 right-0 flex-1 h-[${SCREEN_HEIGHT}px] aspect-9/16`}>
        {!videoLoaded && (
          <FastImage
            source={{
              uri: item.video.thumb,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={tw`absolute top-0 left-0 bottom-0 right-0 flex-1 h-[${SCREEN_HEIGHT}px] aspect-9/16`}
            //   defaultSource={Loader}
          />
        )}

        {isVisible || preload ? (
          <Video
            poster={{
              resizeMode: 'cover',
              source: {
                uri: item.video.thumb,
              },
            }}
            source={
              isVisible || preload
                ? {uri: convertToProxyURL(item.video.source?.uri ?? '') ?? ''}
                : undefined
            }
            bufferConfig={{
              minBufferMs: 2500,
              maxBufferMs: 3000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 2500,
            }}
            ignoreSilentSwitch="ignore"
            playWhenInactive={false}
            playInBackground={false}
            controls={false}
            disableFocus={true}
            style={tw`absolute top-0 left-0 bottom-0 right-0 flex-1 h-[${SCREEN_HEIGHT}px] aspect-9/16`}
            paused={isPaused}
            repeat
            hideShutterView
            minLoadRetryCount={5}
            resizeMode="cover"
            shutterColor="transparent"
            onReadyForDisplay={handlerVideoLoad}
          />
        ) : null}
      </View>
    </View>
  );
};
export default VideoItem;
