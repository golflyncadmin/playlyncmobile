import {Alert} from 'react-native';
import {appImages} from '../exporter';

export function showAlert(type: string, des: string) {
  Alert.alert(type, des);
}

export const UNEXPECTED_ERROR = 'Something went wrong. Please try again later.';

export const APP_INTRO_SLIDES = [
  {
    key: 1,
    title: 'Feature 1',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: appImages.feature1,
  },
  {
    key: 2,
    title: 'Feature 2',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: appImages.feature2,
  },
  {
    key: 3,
    title: 'Feature 3',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: appImages.feature3,
  },
];

export const IMAGE_OPTIONS = {
  quality: 10,
  mediaType: 'photo',
  includeBase64: false,
};
