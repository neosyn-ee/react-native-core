import React, {
  FC,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Modal, StatusBar, View} from 'react-native';
import RnmcVideoPlayer from 'react-native-media-console';
import Video, {OnProgressData, OnSeekData, VideoRef} from 'react-native-video';
import tw from 'twrnc';

import {
  PlayerInfoObject,
  PlayerProps,
  VideoPlayerProps,
  VideoSizeProps,
} from './VideoPlayer.type';
import {useScreenOrientation} from '../../hooks/useScreenOrientation';
import {isAndroid} from '../../utils/helpers';

export const Player: FC<PlayerProps> = memo(
  ({
    source,
    isFullscreen,
    paused,
    setPaused,
    setFullscreen,
    playerInfo,
    disableControls,
    resizeMode,
    muted,
    ...props
  }) => {
    const videoRef = useRef<VideoRef | null>(null);

    const handleOnLoad = () => {
      if (playerInfo?.current.elapsedSecs) {
        videoRef.current!.seek(playerInfo?.current.elapsedSecs);
      }
    };
    const handleOnPlay = () => {
      handleOnLoad();
      if (paused) {
        setPaused(false);
      }
    };
    const handleOnPause = () => {
      setPaused(true);
    };
    const handleOnEnterFullscreen = () => {
      setFullscreen?.(true);
    };
    const handleOnExitFullscreen = () => {
      setFullscreen?.(false);
    };
    const handleOnProgress = ({currentTime}: OnProgressData) => {
      playerInfo!.current.elapsedSecs = currentTime;
    };
    const handleOnSeek = ({seekTime}: OnSeekData) => {
      playerInfo!.current.elapsedSecs = seekTime;
    };

    return (
      <RnmcVideoPlayer
        videoRef={videoRef}
        source={source}
        isFullscreen={isFullscreen}
        toggleResizeModeOnFullscreen={false}
        onLoad={handleOnLoad}
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        onBack={handleOnExitFullscreen}
        onEnterFullscreen={handleOnEnterFullscreen}
        onExitFullscreen={handleOnExitFullscreen}
        onProgress={handleOnProgress}
        onSeek={handleOnSeek}
        disableFullscreen={disableControls}
        disablePlayPause={disableControls}
        disableSeekButtons={disableControls}
        disableSeekbar={disableControls}
        disableVolume={disableControls}
        disableTimer={disableControls}
        disableBack={!isFullscreen || disableControls}
        paused={paused}
        resizeMode={resizeMode}
        muted={muted}
        volume={muted ? 0 : undefined}
        containerStyle={props.videoContainerStyle}
        {...props}
      />
    );
  },
);

const VideoPlayer = forwardRef<
  React.MutableRefObject<PlayerInfoObject>,
  VideoPlayerProps
>(
  (
    {
      width,
      height,
      thumb,
      isFullscreen = false,
      autoplay = false,
      fullscreenOrientation,
      fullscreenAutorotate,
      disableControlsWhen,
      ...props
    },
    ref,
  ) => {
    const [fullscreen, setFullscreen] = useState<boolean>(isFullscreen);
    const [paused, setPaused] = useState<boolean>(!autoplay);
    const {isLandscape} = useScreenOrientation();
    const playerInfo = useRef<PlayerInfoObject>({
      elapsedSecs: 0,
    });
    useImperativeHandle(ref, () => playerInfo, []);
    const handleFullscreenChanges = () => {
      if (fullscreenAutorotate) {
        const autoFullscreenOnRotateTriggered: boolean =
          isAndroid() &&
          !!fullscreenAutorotate &&
          fullscreenOrientation === 'landscape' &&
          !!isLandscape;
        if (!fullscreen && autoFullscreenOnRotateTriggered) {
          setFullscreen(true);
        } else if (fullscreen && !isLandscape) {
          setFullscreen(false);
        }
      }
    };
    useEffect(() => {
      setPaused(!autoplay);
    }, [autoplay]);
    useEffect(handleFullscreenChanges, [isLandscape]);
    if (fullscreen) {
      StatusBar.setHidden(true);
    } else {
      StatusBar.setHidden(false);
    }
    const disableControls =
      (disableControlsWhen?.fullscreen && fullscreen) ||
      (disableControlsWhen?.default && !fullscreen) ||
      (disableControlsWhen?.fullscreen && disableControlsWhen?.default) ||
      false;
    const RenderedPlayer = (
      <Player
        poster={{
          resizeMode: 'cover',
          source: {
            uri: thumb,
          },
        }}
        setPaused={setPaused}
        setFullscreen={setFullscreen}
        isFullscreen={fullscreen}
        playerInfo={playerInfo}
        disableControls={disableControls}
        disableOverlay={disableControls}
        paused={paused}
        resizeMode="contain"
        {...props}
      />
    );
    const sizes: VideoSizeProps = {
      width: width ?? '100%',
      height: height ?? 250,
    };
    return (
      <>
        {fullscreen ? (
          <Modal
            animationType="fade"
            transparent={false}
            visible={fullscreen}
            supportedOrientations={['portrait', 'landscape']}>
            <View
              style={tw`h-full`}
              pointerEvents={disableControls ? 'none' : undefined}>
              {RenderedPlayer}
            </View>
          </Modal>
        ) : (
          <View
            style={!fullscreen && sizes}
            pointerEvents={disableControls ? 'none' : undefined}>
            {RenderedPlayer}
          </View>
        )}
      </>
    );
  },
);
export default VideoPlayer;
