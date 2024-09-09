import React, {useCallback, useRef, useState} from 'react';
import {View} from 'react-native';
import tw from 'twrnc';

import {VideoAudioCommentProps} from './VideoAudioComment.types';
import {AudioPlayerRecorder} from '../AudioPlayerRecorder';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {PlayerInfoObject} from '../VideoPlayer/VideoPlayer.type';

const BOTTOM_APPBAR_HEIGHT = 80;

const VideoAudioComment = ({video, audioPlayer}: VideoAudioCommentProps) => {
  const [muted, setMuted] = useState<boolean>(false);
  const [videoPlayerProps, setNewPlayerProps] = useState({
    autoplay: true,
    showOnStart: true,
    alwaysShowControls: true,
    controlAnimationTiming: 0,
    disableBack: true,
    disableVolume: false,
    disablePlayPause: false,
    disableFullscreen: true,
    disableSeekButtons: true,
    tapAnywhereToPause: true,
  });

  const playerInfoRef = useRef<React.MutableRefObject<PlayerInfoObject>>(null);

  const showControls = () => {
    setNewPlayerProps(prevState => ({
      ...prevState,
      disableVolume: false,
      disablePlayPause: false,
      disableOverlay: false,
    }));
  };

  const hideControls = () => {
    setNewPlayerProps(prevState => ({
      ...prevState,
      disableVolume: true,
      disablePlayPause: true,
      disableOverlay: true,
    }));
  };

  const onEnd = () => {
    showControls();
  };

  const onPause = () => {
    showControls();
  };

  const onPlay = () => {
    setMuted(false);
    hideControls();
  };

  const playerInfoElapsedSecs = useCallback(
    () => playerInfoRef.current?.current.elapsedSecs ?? 0,
    [playerInfoRef],
  );

  return (
    <>
      <View style={tw`flex-1 mb-[${BOTTOM_APPBAR_HEIGHT}]`}>
        <VideoPlayer
          ref={playerInfoRef}
          {...video}
          {...videoPlayerProps}
          muted={muted}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
        />
      </View>
      <AudioPlayerRecorder
        {...audioPlayer}
        setMuted={setMuted}
        playerInfoElapsedSecs={playerInfoElapsedSecs}
      />
    </>
  );
};

export default VideoAudioComment;
