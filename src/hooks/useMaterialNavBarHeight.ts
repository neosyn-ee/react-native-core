import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useMaterialNavBarHeight = (withoutBottomTabs: boolean) => {
  const {bottom, top} = useSafeAreaInsets();
  console.log({bottom, top});
  return bottom - Math.floor(top) + (withoutBottomTabs ? 0 : 80);
};

export default useMaterialNavBarHeight;
