import {Dimensions, PixelRatio, Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const guidelineBaseWidth = 375;
export const DEVICE_HIEGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_FONT_SCALE = Dimensions.get('window').scale;
export const scaleSize = (size) => (DEVICE_WIDTH / guidelineBaseWidth) * size;
export const scaleFont = (size) => size * PixelRatio.getFontScale();
export const isIphone = () => Platform.OS === 'ios';
export const isInernetConnected = async () => {
  return await NetInfo.fetch().then((state) => {
    return state;
  });
};
