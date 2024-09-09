import React from 'react';

import {CameraScreen} from '../components/CameraScreen';
import {onMediaCaptured} from '../components/CameraScreen/CameraScreen.stories';

const CameraTest: React.FC = () => {
  return (
    <CameraScreen onMediaCaptured={onMediaCaptured} recordingMode="combined" />
  );
};
export default CameraTest;
