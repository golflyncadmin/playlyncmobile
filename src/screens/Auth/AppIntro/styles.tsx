import {StyleSheet} from 'react-native';
import {
  HP,
  WP,
  scrWidth,
  GLColors,
  GLFontSize,
  GLFontsFamily,
  isIOS,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyles: {
    width: WP('100'),
    height: HP('100'),
  },
  textContainer: {
    width: scrWidth,
    position: 'absolute',
    paddingHorizontal: WP('5'),
    bottom: isIOS() ? WP('25') : WP('20'),
  },
  titleTextStyle: {
    lineHeight: 40,
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_32,
    fontFamily: GLFontsFamily.PlusJakartaSans_ExtraBold,
  },
  infoTextStyle: {
    lineHeight: 24,
    marginVertical: WP('3'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.PlusJakartaSans_Medium,
  },
  skipContainer: {
    top: WP('2'),
    marginLeft: WP('1'),
    borderRadius: WP('5'),
    paddingVertical: WP('1.5'),
    paddingHorizontal: WP('3'),
    backgroundColor: GLColors.Natural.White,
  },
  skipTextStyle: {
    bottom: isIOS() ? 0 : 1.2,
    color: GLColors.Blue.B1,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.PlusJakartaSans_SemiBold,
  },
  activeDotStyle: {
    width: WP('2'),
    height: WP('2'),
    backgroundColor: GLColors.Blue.B1,
  },
  inActiveDotStyle: {
    width: WP('2'),
    height: WP('2'),
    backgroundColor: GLColors.Natural.N3,
  },
  nextContainer: {
    bottom: WP('2'),
    marginRight: WP('1'),
  },
});

export default styles;
