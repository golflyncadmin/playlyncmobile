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
  generalDescStyle: {
    marginTop: WP('5'),
    marginBottom: WP('4'),
  },
  headingTextStyle: {
    marginTop: WP('5'),
    marginHorizontal: WP('5'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.PlusJakartaSans_SemiBold,
  },
  descTextStyle: {
    marginTop: WP('1'),
    marginHorizontal: WP('5'),
    color: GLColors.Natural.N13,
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.PlusJakartaSans_Regular,
  },
});

export default styles;
