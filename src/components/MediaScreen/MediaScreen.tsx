import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OnLoadData, OnVideoErrorData} from 'react-native-video';
import tw from 'twrnc';

import {MediaScreenProps} from './MediaScreen.types';
import {SAFE_AREA_PADDING} from '../../utils/constants';
import {isAndroid} from '../../utils/helpers';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const requestSavePermission = async (): Promise<boolean> => {
  if (isAndroid()) {
    return true;
  }

  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  if (permission == null) {
    return false;
  }
  let hasPermission = await PermissionsAndroid.check(permission);
  if (!hasPermission) {
    const permissionRequestResult = await PermissionsAndroid.request(
      permission,
    );
    hasPermission = permissionRequestResult === 'granted';
  }
  return hasPermission;
};

const isVideoOnLoadEvent = (
  event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>,
): event is OnLoadData => 'duration' in event && 'naturalSize' in event;

const MediaScreen = ({
  path,
  type,
  onPressClose,
  icon,
  albumName,
  modalSaveTextSuccess,
  modalSaveTextError,
  onSaveCloudPressed,
  onSaveLocalPressed,
  isLocalPath,
  height = '100%',
  width,
  onDeletePressed,
  overlayComponent,
  ...props
}: MediaScreenProps) => {
  const [hasImageLoadError, setHasImageLoadError] = useState(false);

  const [_savingState, setSavingState] = useState<'none' | 'saving' | 'saved'>(
    'none',
  );

  const source = useMemo(
    () => ({uri: isLocalPath ? `file://${path}` : path}),
    [path, isLocalPath],
  );

  const onMediaLoad = useCallback(
    (event: OnLoadData | NativeSyntheticEvent<ImageLoadEventData>) => {
      if (isVideoOnLoadEvent(event)) {
        console.log(
          `Video loaded. Size: ${event.naturalSize.width}x${event.naturalSize.height} (${event.naturalSize.orientation}, ${event.duration} seconds)`,
        );
      } else {
        console.log(
          `Image loaded. Size: ${event.nativeEvent.source.width}x${event.nativeEvent.source.height}`,
        );
      }
    },
    [],
  );

  const onMediaLoadError = useCallback((error: OnVideoErrorData) => {
    console.log(`failed to load media: ${JSON.stringify(error)}`);
  }, []);

  const onImageLoadError = useCallback(
    ({nativeEvent: {error}}: NativeSyntheticEvent<ImageErrorEventData>) => {
      Alert.alert('Loading Error:', error, [
        {
          text: 'ok',
          onPress: () => {
            setHasImageLoadError(true);
          },
        },
      ]);
    },
    [],
  );

  const onSavePressed = useCallback(async () => {
    try {
      setSavingState('saving');
      const hasPermission = await requestSavePermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission denied!',
          'Vision Camera does not have permission to save the media to your camera roll.',
        );
        return;
      }
      await CameraRoll.saveAsset(`file://${path}`, {
        type: type,
        ...(albumName && {album: albumName}),
      });
      onSaveLocalPressed && onSaveLocalPressed();
      setSavingState('saved');
      modalSaveTextSuccess &&
        Alert.alert(
          modalSaveTextSuccess.title,
          modalSaveTextSuccess.description,
          modalSaveTextSuccess.buttons,
        );
    } catch (e) {
      const message = e instanceof Error ? e.message : JSON.stringify(e);
      console.error(
        `An unexpected error occured while trying to save your ${type}. ${message}`,
      );
      setSavingState('none');
      modalSaveTextError &&
        Alert.alert(modalSaveTextError.title, modalSaveTextError.description);
    }
  }, [
    albumName,
    modalSaveTextError,
    modalSaveTextSuccess,
    onSaveLocalPressed,
    path,
    type,
  ]);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#FFFFFF]`}>
      {type === 'photo' && (
        <>
          {!hasImageLoadError ? (
            <Image
              style={tw`flex-1`}
              source={source}
              resizeMode="cover"
              onLoad={onMediaLoad}
              onError={onImageLoadError}
            />
          ) : (
            <View style={tw`flex-1 items-center justify-center`}>
              <Image
                style={{width: 150, height: 150}}
                source={require('../../assets/img/no-image-placeholder.png')}
              />
              <Text style={tw`text-base uppercase text-[#a2a2a2]`}>
                No image available
              </Text>
            </View>
          )}
        </>
      )}
      {type === 'video' && (
        <VideoPlayer
          source={source}
          height={height}
          width={width}
          onLoad={onMediaLoad}
          showOnStart={true}
          alwaysShowControls={true}
          controlAnimationTiming={0}
          disableBack={true}
          disableVolume={true}
          disableFullscreen={true}
          disableSeekButtons={true}
          onError={onMediaLoadError}
          disableOverlay
          {...props}
        />
      )}
      <IconButton
        style={styles.closeButton}
        icon={icon ?? 'close'}
        iconColor="white"
        size={30}
        onPress={onPressClose}
      />
      <View style={styles.iconContainer}>
        {overlayComponent && <View>{overlayComponent}</View>}
        {onSaveCloudPressed && (
          <IconButton
            style={styles.saveCloud}
            icon="cloud"
            iconColor="white"
            size={30}
            onPress={onSaveCloudPressed}
          />
        )}
        {onSaveLocalPressed && (
          <IconButton
            style={styles.saveButton}
            icon="folder-download"
            iconColor="white"
            size={30}
            onPress={onSavePressed}
          />
        )}
        {onDeletePressed && (
          <IconButton
            style={styles.delete}
            icon="trash-can-outline"
            iconColor="white"
            size={30}
            onPress={onDeletePressed}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: SAFE_AREA_PADDING.paddingTop,
    right: SAFE_AREA_PADDING.paddingRight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: SAFE_AREA_PADDING.paddingTop,
    left: SAFE_AREA_PADDING.paddingLeft,
  },
  saveButton: {
    marginTop: SAFE_AREA_PADDING.paddingTop - 5,
  },
  saveCloud: {
    marginTop: SAFE_AREA_PADDING.paddingTop - 5,
  },
  delete: {
    marginTop: SAFE_AREA_PADDING.paddingTop - 5,
  },
});

export default MediaScreen;
