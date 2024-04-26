import AppServiceProvider from './components/AppServiceProvider/AppServiceProvider';
import AudioPlayerRecorder, {
  checkPermissions,
} from './components/AudioPlayerRecorder/AudioPlayerRecorder';
import CameraScreen from './components/CameraScreen/CameraScreen';
import MediaScreen from './components/MediaScreen/MediaScreen';
import Post from './components/Post/Post';
import Spinner from './components/Spinner/Spinner';
import {onSendAudioNote} from './components/VideoAudioComment';
import VideoAudioComment from './components/VideoAudioComment/VideoAudioComment';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VirtualizedVideoList from './components/VirtualizedVideoList/VirtualizedVideoList';
import {SCREEN_ASPECT_RATIO} from './utils/constants';

export {delay, isAndroid} from './utils/helpers';

export type {
  AudioPlayerRecorderProps,
  AudioPlayerRecorderStateType,
  IsSentEnum,
} from './components/AudioPlayerRecorder/AudioPlayerRecorder.types';

export type {
  PostType,
  PostExposedInstanceValue,
  PostProps,
} from './components/Post/Post.types';

export type {
  CameraScreenProps,
  onCodeScannedCallback,
  onMediaCapturedCallback,
} from './components/CameraScreen/CameraScreen.types';

export {
  AudioPlayerRecorder,
  AppServiceProvider,
  onSendAudioNote,
  VideoPlayer,
  Spinner,
  VirtualizedVideoList,
  CameraScreen,
  checkPermissions,
  MediaScreen,
  VideoAudioComment,
  Post,
  SCREEN_ASPECT_RATIO,
};
