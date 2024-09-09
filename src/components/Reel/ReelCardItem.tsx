import {PostProps} from 'components/Post/Post.types';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import tw from 'twrnc';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utils/constants';

export type ReelCardItemProps = {
  isLoading: boolean;
  item: PostProps;
  onPressReel: () => void;
};

const ReelCardItem: React.FC<ReelCardItemProps> = ({
  isLoading,
  item,
  onPressReel,
}) => {
  return (
    <View
      style={tw`w-${SCREEN_WIDTH * 0.35} h-${
        SCREEN_HEIGHT * 0.25
      } justify-center items-center bg-[rgba(0,0,0,0.8)] m-2 rounded-lg overflow-hidden`}>
      {isLoading ? null : (
        <TouchableOpacity onPress={onPressReel}>
          <FastImage
            source={{
              uri: item.video.thumb,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={tw`w-${SCREEN_WIDTH * 0.35} h-${
              SCREEN_HEIGHT * 0.25
            } justify-center items-center`}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ReelCardItem;
