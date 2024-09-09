import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {
  Camera,
  CameraRuntimeError,
  Code,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
  useCodeScanner,
  useMicrophonePermission,
} from 'react-native-vision-camera';
import tw from 'twrnc';

import {CameraScreenProps, onMediaCapturedCallback} from './CameraScreen.types';
import {CaptureButton} from './CaptureButton';
import {useIsForeground} from '../../hooks/useIsForeground';
import {SAFE_AREA_PADDING} from '../../utils/constants';

import {DEFAULT_CAMERA_FORMAT_FILTERS} from '.';

const AnimatedCamera = Animated.createAnimatedComponent(Camera);

const CameraScreen = ({
  formatFilters = DEFAULT_CAMERA_FORMAT_FILTERS,
  recordingMode = 'photo',
  onMediaCaptured: _onMediaCaptured,
  onCodeScanned: _onCodeScanned,
  stopOnFirstCodeScan = true,
  validateValueScannedByUser,
  validateValueScannedMessage,
  fileType,
  videoBitRate,
  videoCodec,
  onPressClose,
  timeMustStopRecording,
}: CameraScreenProps) => {
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );
  // console.log(props.validateValueScannedByUser);

  const isPressingButton = useSharedValue(false);

  // check if camera page is active
  const isFocused = true; // harcoded due to lack of a screen context (Should evaluate from @react-navigation/core's useIsFocused())
  const isForeground = useIsForeground();
  const isActive = isForeground && isFocused;

  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [enableHdr, setEnableHdr] = useState(false);
  const [scannedValue, setScannedValue] = useState(false);

  const device = useCameraDevice(cameraPosition);

  const format = useCameraFormat(device, formatFilters);

  const supportsFlash = device?.hasFlash ?? false;
  const supportsHdr = format?.supportsPhotoHdr && format?.supportsVideoHdr;

  const {
    hasPermission: hasCameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const {
    hasPermission: hasMicPermission,
    requestPermission: requestMicPermission,
  } = useMicrophonePermission();

  // # start region Callbacks
  const onCodeScanned = useCallback(
    (codes: Code[]) => {
      const code = codes.find(cod => !!cod.value);
      if (_onCodeScanned && code?.value) {
        if (stopOnFirstCodeScan && !scannedValue) {
          if (validateValueScannedByUser) {
            setScannedValue(true);
            const alertMsg = validateValueScannedMessage(code.value);
            Alert.alert('Code found', alertMsg, [
              {
                text: 'scan again',
                onPress: () => {
                  setScannedValue(false);
                },
              },
              {
                text: 'ok',
                onPress: () => {
                  _onCodeScanned(code.value!);
                },
              },
            ]);
          } else {
            _onCodeScanned(code.value);
            setScannedValue(true);
          }
        } else if (!stopOnFirstCodeScan) {
          _onCodeScanned(code.value);
        }
      }
    },
    [
      _onCodeScanned,
      stopOnFirstCodeScan,
      scannedValue,
      validateValueScannedByUser,
      validateValueScannedMessage,
    ],
  );

  const setIsPressingButton = useCallback(
    (pressed: boolean) => {
      isPressingButton.value = pressed;
    },
    [isPressingButton],
  );

  const initializeCamera = async function () {
    const needsMicPermission: boolean =
      recordingMode === 'video' || recordingMode === 'combined';
    try {
      !hasCameraPermission && (await requestCameraPermission());
      !hasMicPermission && needsMicPermission && (await requestMicPermission());
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const micPermission = needsMicPermission
        ? await Camera.getMicrophonePermissionStatus()
        : undefined;
      if (cameraPermission === 'denied' || micPermission === 'denied') {
        await Linking.openSettings();
        return;
      }
      setIsCameraInitialized(true);
    } catch (error) {
      console.error('Error initializing camera:', error);
    }
  };
  // # end region Callbacks

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned,
  });

  // #start region Camera callbacks
  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const onMediaCaptured = useCallback<onMediaCapturedCallback>(
    media => {
      _onMediaCaptured && _onMediaCaptured(media);
    },
    [_onMediaCaptured],
  );

  const onFlashPressed = useCallback(() => {
    setFlash(f => (f === 'off' ? 'on' : 'off'));
  }, []);
  // #end region Camera callbacks

  const checkPermission = async () => {
    const permissionMic = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    );
    setHasMicrophonePermission(permissionMic === 'granted');
  };

  useEffect(() => {
    initializeCamera().then(() => checkPermission());
  }, []);

  return (
    <View style={tw`flex-1 bg-[#000000]`}>
      {isCameraInitialized && device && (
        <>
          <AnimatedCamera
            ref={camera}
            style={tw`flex-1 relative`}
            outputOrientation="portrait"
            onError={onError}
            isActive={isActive}
            device={device}
            format={format}
            videoHdr={enableHdr}
            photoHdr={enableHdr}
            photo={recordingMode !== 'scanner'}
            video={recordingMode !== 'scanner'}
            audio={hasMicrophonePermission}
            codeScanner={recordingMode === 'scanner' ? codeScanner : undefined}
          />
          {onPressClose && (
            <IconButton
              icon="close"
              iconColor="white"
              size={30}
              style={styles.closeIcon}
              onPress={onPressClose}
            />
          )}
          {recordingMode !== 'scanner' && (
            <CaptureButton
              flash={supportsFlash ? flash : 'off'}
              camera={camera}
              onMediaCaptured={onMediaCaptured}
              setIsPressingButton={setIsPressingButton}
              enabled={isCameraInitialized && isActive}
              recordingMode={recordingMode}
              fileType={fileType}
              videoBitRate={videoBitRate}
              videoCodec={videoCodec}
              timeMustStopRecording={timeMustStopRecording}
            />
          )}
          <View style={styles.rightButtonRow}>
            {recordingMode !== 'scanner' && (
              <IconButton
                icon="camera-flip"
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={onFlipCameraPressed}
              />
            )}
            {supportsFlash && (
              <IconButton
                style={tw`mt-3`}
                icon={flash === 'off' ? 'flash-off' : 'flash'}
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={onFlashPressed}
              />
            )}
            {supportsHdr && recordingMode !== 'scanner' && (
              <IconButton
                style={tw`mt-3`}
                icon={enableHdr ? 'hdr' : 'hdr-off'}
                iconColor="white"
                containerColor="rgba(140, 140, 140, 0.3)"
                mode="outlined"
                size={25}
                onPress={() => setEnableHdr(h => !h)}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rightButtonRow: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: SAFE_AREA_PADDING.paddingRight,
    top: SAFE_AREA_PADDING.paddingTop,
  },
  closeIcon: {
    position: 'absolute',
    left: SAFE_AREA_PADDING.paddingLeft,
    top: SAFE_AREA_PADDING.paddingTop,
  },
});

export default CameraScreen;
