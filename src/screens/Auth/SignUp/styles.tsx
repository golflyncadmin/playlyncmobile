import {StyleSheet} from 'react-native';
import {
  WP,
  GLColors,
  scrHeight,
  GLFontSize,
  GLFontsFamily,
  isIOS,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  scrollViewStyle: {
    flex: 1,
  },
  heightStyle: {
    minHeight: scrHeight,
  },
  scrollContent: {
    flex: 1,
    minHeight: scrHeight,
  },
  logoContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: WP('45'),
    height: WP('31'),
  },
  contentContainer: {
    flex: 0.7,
    alignItems: 'center',
    marginBottom: WP('2'),
    marginHorizontal: WP('4'),
  },
  headingStyle: {
    marginBottom: WP('1'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_32,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
  emptyView: {
    flex: isIOS() ? 0.5 : 0.6,
  },
  memberTextStyle: {
    marginTop: WP('2'),
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  loginStyle: {
    color: GLColors.Blue.B2,
  },
});

export default styles;
