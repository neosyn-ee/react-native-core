import React, {FC} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <VideoPlayer
            autoplay
            // poster="https://fastly.picsum.photos/id/805/1920/1080.jpg?hmac=ojjmQ6qddjxToiegG5R2YbQMusmeXlivOqSfBXkbJUk"
            fullscreenAutorotate
            fullscreenOrientation="landscape"
            disableControlsWhen={{default: false, fullscreen: false}}
            source={{
              uri: 'https://video-p2cam-uat-eu-central-1.s3.eu-central-1.amazonaws.com/roberto_garaffa_15/roberto_garaffa_15_28-8-2024_13-7-41.mp4',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
