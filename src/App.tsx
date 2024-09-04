import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppServiceProvider} from './components/AppServiceProvider';
import AudioScreen from './screens/AudioScreen';
import CameraTest from './screens/CameraTest';
import FeedReelScrollScreen from './screens/FeedReelScrollScreen';
import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import PhotoScreen from './screens/PhotoScreen';
import VideoAudioCommentScreen from './screens/VideoAudioCommentScreen';
import VideoScreen from './screens/VideoScreen';

const Tab = createMaterialBottomTabNavigator();

export default (): JSX.Element => (
  <AppServiceProvider>
    <NavigationContainer>
      <Tab.Navigator labeled={false} initialRouteName="camera">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="view-list"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Audio"
          component={AudioScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="microphone"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="VideoAudio"
          component={VideoAudioCommentScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="comment" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Photo"
          component={PhotoScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-box-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="file-video-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="camera"
          component={CameraTest}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="camera" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="FeedReel"
          component={FeedReelScrollScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="view-list"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </AppServiceProvider>
);
