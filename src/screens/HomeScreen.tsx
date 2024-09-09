import React, {FC} from 'react';
import {ResizeMode} from 'react-native-video';

import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const HomeScreen: FC = () => {
  return (
    <VideoPlayer
      source={{
        uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
      }}
      fullscreen
      muted={false}
      repeat
      resizeMode={ResizeMode.COVER}
      controls
      showNotificationControls
    />
  );
};

export default HomeScreen;
