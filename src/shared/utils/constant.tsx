import {Alert} from 'react-native';
import {appImages} from '../exporter';
import {svgIcon} from '../../assets/svg';

export function showAlert(type: string, des: string) {
  Alert.alert(type, des);
}

export const UNEXPECTED_ERROR = 'Something went wrong. Please try again later.';

export const IMAGE_OPTIONS = {
  quality: 10,
  mediaType: 'photo',
  includeBase64: false,
};

export const EMAIL = 'Log In with your Email';
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

export const LOGIN_TYPES = [
  {
    id: 1,
    title: 'Continue with Google',
    icon: svgIcon.GoogleIcon,
  },
  {
    id: 2,
    title: 'Continue with Apple',
    icon: svgIcon.AppleIcon,
  },
  {
    id: 3,
    title: 'Continue with Facebook',
    icon: svgIcon.FBIcon,
  },
  {
    id: 4,
    title: 'Continue with Instagram',
    icon: svgIcon.InstaIcon,
  },
  {
    id: 5,
    title: 'Log In with your Email',
    icon: null,
  },
];
