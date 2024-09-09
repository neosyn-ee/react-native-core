import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

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
    <View style={styles.media}>
      <View style={styles.media}>
        {!videoLoaded && (
          <FastImage
            source={{
              uri: item.video.thumb,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
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
              isVisible || preload ? {uri: item.video.source?.uri} : undefined
            }
            bufferConfig={{
              minBufferMs: 2500,
              maxBufferMs: 3000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 2500,
              cacheSizeMB: 200,
            }}
            ignoreSilentSwitch="ignore"
            playWhenInactive={false}
            playInBackground={false}
            controls={false}
            disableFocus={true}
            style={styles.media}
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
const styles = StyleSheet.create({
  media: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default VideoItem;
