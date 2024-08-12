import {Alert} from 'react-native';
import {appImages} from '../exporter';

export function showAlert(type: string, des: string) {
  Alert.alert(type, des);
}

export const UNEXPECTED_ERROR = 'Something went wrong. Please try again later.';

export const APP_INTRO_SLIDES = [
  {
    key: 1,
    image: appImages.appIntroOne,
  },
  {
    key: 2,
    image: appImages.appIntroTwo,
  },
  {
    key: 3,
    image: appImages.appIntroThree,
  },
];

export const IMAGE_OPTIONS = {
  quality: 10,
  mediaType: 'photo',
  includeBase64: false,
};
