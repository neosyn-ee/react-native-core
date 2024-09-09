import React, {type FC, useEffect, useRef, useState} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import Video, {
  BufferConfig,
  BufferingStrategyType,
  type EnumValues,
  type OnAudioFocusChangedData,
  OnBandwidthUpdateData,
  type OnBufferData,
  type OnLoadData,
  type OnPlaybackRateChangeData,
  type OnPlaybackStateChangedData,
  type OnProgressData,
  type OnSeekData,
  type OnTextTrackDataChangedData,
  type OnVideoAspectRatioData,
  type OnVideoErrorData,
  ReactVideoProps,
  type ReactVideoSource,
  ResizeMode,
  type SelectedTrack,
  type SelectedVideoTrack,
  SelectedVideoTrackType,
  VideoRef,
} from 'react-native-video';

import styles from './styles';

import {toast, VideoLoader} from './index';

export const bufferConfig: BufferConfig = {
  minBufferMs: 15000,
  maxBufferMs: 50000,
  bufferForPlaybackMs: 2500,
  bufferForPlaybackAfterRebufferMs: 5000,
  live: {
    targetOffsetMs: 500,
  },
};

type VideoPlayerProps = {
  source: ReactVideoSource;
  showControls: boolean;
  fullscreen: boolean;
  resizeMode: EnumValues<ResizeMode>;
  showNotificationControls: boolean;
  repeat: boolean;
  useCache: boolean;
  showPoster: boolean;
  muted: boolean;
  isPaused?: boolean;
} & ReactVideoProps;

const VideoPlayer: FC<VideoPlayerProps> = ({
  source,
  showControls,
  fullscreen,
  resizeMode,
  showNotificationControls,
  repeat,
  useCache,
  showPoster,
  muted,
  isPaused,
  ...props
}) => {
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [_, setVideoSize] = useState({videoWidth: 0, videoHeight: 0});
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    setPaused(isPaused ?? true);
  }, [isPaused]);
  const [selectedAudioTrack, setSelectedAudioTrack] = useState<
    SelectedTrack | undefined
  >(undefined);
  const [selectedTextTrack, setSelectedTextTrack] = useState<
    SelectedTrack | undefined
  >(undefined);
  const [selectedVideoTrack, setSelectedVideoTrack] =
    useState<SelectedVideoTrack>({
      type: SelectedVideoTrackType.AUTO,
    });
  const [isSeeking, setIsSeeking] = useState(false);

  const videoRef = useRef<VideoRef>(null);
  const viewStyle = fullscreen ? styles.fullScreen : styles.halfScreen;
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = (data: OnLoadData) => {
    setDuration(data.duration);
  };

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = (data: OnSeekData) => {
    setCurrentTime(data.currentTime);
    setIsSeeking(false);
  };

  const onVideoLoadStart = () => {
    console.log('onVideoLoadStart');
    setIsLoading(true);
  };

  const onTextTrackDataChanged = (data: OnTextTrackDataChangedData) => {
    console.log(`Subtitles: ${JSON.stringify(data, null, 2)}`);
  };

  const onAspectRatio = (data: OnVideoAspectRatioData) => {
    console.log('onAspectRadio called ' + JSON.stringify(data));
    setVideoSize({videoWidth: data.width, videoHeight: data.height});
  };

  const onVideoBuffer = (param: OnBufferData) => {
    console.log('onVideoBuffer');
    setIsLoading(param.isBuffering);
  };

  const onReadyForDisplay = () => {
    console.log('onReadyForDisplay');
    setIsLoading(false);
  };

  const onAudioBecomingNoisy = () => {
    setPaused(true);
  };

  const onAudioFocusChanged = (event: OnAudioFocusChangedData) => {
    setPaused(!event.hasAudioFocus);
  };

  const onError = (err: OnVideoErrorData) => {
    console.log(JSON.stringify(err));
    toast(true, 'error: ' + JSON.stringify(err));
  };

  const onEnd = () => {
    if (!repeat) {
      // channelUp();
      console.log('onEnd');
    }
  };

  const onPlaybackRateChange = (data: OnPlaybackRateChangeData) => {
    console.log('onPlaybackRateChange', data);
  };

  const onPlaybackStateChanged = (data: OnPlaybackStateChangedData) => {
    console.log('onPlaybackStateChanged', data);
  };

  const onVideoBandwidthUpdate = (data: OnBandwidthUpdateData) => {
    console.log('onVideoBandwidthUpdate', data);
  };

  const onFullScreenExit = () => {
    // iOS pauses video on exit from full screen
    Platform.OS === 'ios' && setPaused(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="black" hidden={false} />

      <View style={viewStyle}>
        <Video
          showNotificationControls={showNotificationControls}
          ref={videoRef}
          source={source}
          style={viewStyle}
          rate={rate}
          paused={isPaused}
          volume={volume}
          muted={muted}
          controls={showControls}
          resizeMode={resizeMode}
          onFullscreenPlayerWillDismiss={onFullScreenExit}
          onLoad={onLoad}
          onTextTrackDataChanged={onTextTrackDataChanged}
          onProgress={onProgress}
          onEnd={onEnd}
          progressUpdateInterval={1000}
          onError={onError}
          onAudioBecomingNoisy={onAudioBecomingNoisy}
          onAudioFocusChanged={onAudioFocusChanged}
          onLoadStart={onVideoLoadStart}
          onAspectRatio={onAspectRatio}
          onReadyForDisplay={onReadyForDisplay}
          onBuffer={onVideoBuffer}
          onBandwidthUpdate={onVideoBandwidthUpdate}
          onSeek={onSeek}
          repeat={repeat}
          selectedTextTrack={selectedTextTrack}
          selectedAudioTrack={selectedAudioTrack}
          selectedVideoTrack={selectedVideoTrack}
          bufferConfig={{
            ...bufferConfig,
            cacheSizeMB: useCache ? 200 : 0,
          }}
          preventsDisplaySleepDuringVideoPlayback={true}
          renderLoader={showPoster ? <VideoLoader /> : undefined}
          onPlaybackRateChange={onPlaybackRateChange}
          onPlaybackStateChanged={onPlaybackStateChanged}
          bufferingStrategy={BufferingStrategyType.DEFAULT}
          debug={{enable: true, thread: true}}
          subtitleStyle={{subtitlesFollowVideo: true}}
          controlsStyles={{
            hideNavigationBarOnFullScreenMode: true,
            hideNotificationBarOnFullScreenMode: true,
          }}
          playWhenInactive={false}
          playInBackground={false}
          {...props}
        />
      </View>
    </View>
  );
};
export default VideoPlayer;
