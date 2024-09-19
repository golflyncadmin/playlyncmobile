import {StyleSheet} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  scrollStyle: {
    flexGrow: 1,
    marginVertical: WP('5'),
    paddingHorizontal: WP('5'),
  },
  headingTextStyle: {
    marginTop: WP('5'),
    marginBottom: WP('3'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.PlusJakartaSans_ExtraBold,
  },
  titleTextStyle: {
    marginTop: WP('4'),
    marginBottom: WP('3'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.PlusJakartaSans_ExtraBold,
  },
  headingsTextStyle: {
    lineHeight: 22,
    color: GLColors.Blue.B2,
    textDecorationLine: 'underline',
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.PlusJakartaSans_ExtraBold,
  },
  descTextStyle: {
    lineHeight: 20,
    marginTop: WP('1'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.PlusJakartaSans_Regular,
  },
});

export default styles;
