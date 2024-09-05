import {Alert} from 'react-native';
import {
  isIOS,
  GLColors,
  appImages,
  GLFontSize,
  GLFontsFamily,
} from '../exporter';
import {svgIcon} from '../../assets/svg';

export function showAlert(type: string, des: string, onPress?: () => void) {
  Alert.alert(type, des, [
    {
      onPress: onPress,
    },
  ]);
}

export const UNEXPECTED_ERROR = 'Something went wrong. Please try again later.';

export const VERIFY_BOTH =
  'Please verify both your phone number and email before login. OTPs have been sent.';

export const VERIFY_EMAIL =
  'Please verify your email before login. An OTP has been sent to your email.';

export const VERIFY_PHONE =
  'Please verify your phone number before login. An OTP has been sent to your phone.';

export const IMAGE_OPTIONS = {
  quality: 10,
  mediaType: 'photo',
  includeBase64: false,
};

export const EMAIL_ENUM = 'email';
export const PHONE_ENUM = 'phone';
export const EMAIL = 'Log In with your Email';

type IntroSlidesTypes = {
  key: number;
  title: string;
  info: string;
  image: any;
};

export const APP_INTRO_SLIDES: IntroSlidesTypes[] = [
  {
    key: 1,
    title: 'Search Tee Times',
    info: 'Easily book golf tee times for a specific day, time, and number of players.',
    image: appImages.feature1,
  },
  {
    key: 2,
    title: 'Book Tee Times',
    info: 'Never miss a game with our seamless booking system. Reserve your tee times in advance and enjoy a hassle-free experience.',
    image: appImages.feature2,
  },
  {
    key: 3,
    title: 'Enjoy Your Game',
    info: 'Arrive at the course and have a great round of golf!',
    image: appImages.feature3,
  },
];

type LoginTypes = {
  id: number;
  type: string;
  title: string;
  icon: any;
};

export const LOGIN_TYPES: LoginTypes[] = [
  {
    id: 1,
    type: 'Google',
    title: 'Continue with Google',
    icon: svgIcon.GoogleIcon,
  },
  ...(isIOS()
    ? [
        {
          id: 2,
          type: 'Apple',
          title: 'Continue with Apple',
          icon: svgIcon.AppleIcon,
        },
      ]
    : []),
  {
    id: 3,
    type: 'Facebook',
    title: 'Continue with Facebook',
    icon: svgIcon.FBIcon,
  },
  {
    id: 4,
    type: 'Instagram',
    title: 'Continue with Instagram',
    icon: svgIcon.InstaIcon,
  },
  {
    id: 5,
    type: 'Manual',
    title: 'Log In with your Email',
    icon: null,
  },
];

type Requests = {
  id: string | number;
  title: string;
};

export const MY_REQUESTS: Requests[] = [
  {
    id: '1REQ',
    title: 'Make Game Request',
  },
  {
    id: '2REQ',
    title: 'Make Game Request',
  },
  {
    id: '3REQ',
    title: 'Make Game Request',
  },
  {
    id: '4REQ',
    title: 'Make Game Request',
  },
  {
    id: '5REQ',
    title: 'Make Game Request',
  },
  {
    id: '6REQ',
    title: 'Make Game Request',
  },
  {
    id: '7REQ',
    title: 'Make Game Request',
  },
  {
    id: '8REQ',
    title: 'Make Game Request',
  },
  {
    id: '9REQ',
    title: 'Make Game Request',
  },
  {
    id: '10REQ',
    title: 'Make Game Request',
  },
  {
    id: '11REQ',
    title: 'Make Game Request',
  },
  {
    id: '12REQ',
    title: 'Make Game Request',
  },
];

export const CALENDAR_THEME = {
  textDayFontWeight: '400',
  textMonthFontWeight: '600',
  textDayHeaderFontWeight: '400',
  dayTextColor: GLColors.Natural.N11,
  monthTextColor: GLColors.Natural.N10,
  textDayFontSize: GLFontSize.FONT_SIZE_14,
  textSectionTitleColor: GLColors.Natural.N8,
  textMonthFontSize: GLFontSize.FONT_SIZE_16,
  textDayHeaderFontSize: GLFontSize.FONT_SIZE_14,
  textDayFontFamily: GLFontsFamily.Poppins_Medium,
  textMonthFontFamily: GLFontsFamily.Poppins_Medium,
  textDayHeaderFontFamily: GLFontsFamily.Poppins_Medium,
};

export const DAY_NAME_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const CURRENT_DATE = new Date().toISOString().split('T')[0];

export const GENERIC_ERROR_TEXT = 'Something went wrong. Please try again.';

export const INS_SCOPES = ['user_profile', 'user_media'];

export const LOCATIONS_DATA = [
  {id: 0, value: 'Fairways Country Club', label: 'Fairways Country Club'},
  {id: 1, value: 'Dubsdread Golf Course', label: 'Dubsdread Golf Course'},
  {
    id: 2,
    value: 'Cathcart Castle Golf Club',
    label: 'Cathcart Castle Golf Club',
  },
  {id: 3, value: 'Miami Beach Golf Club', label: 'Miami Beach Golf Club'},
];

export const TIME_ORDER = ['Morning', 'Afternoon', 'Evening'];
