import {StyleSheet} from 'react-native';
import {
  WP,
  GLColors,
  scrHeight,
  GLFontSize,
  GLFontsFamily,
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
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: WP('45'),
    height: WP('31'),
  },
  contentContainer: {
    flex: 0.6,
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
  infoTextStyle: {
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  codeFieldRoot: {
    width: '100%',
    marginVertical: WP('6'),
    justifyContent: 'space-between',
  },
  cellStyle: {
    borderRadius: 5,
    width: WP('11.5'),
    height: WP('11.5'),
    backgroundColor: GLColors.Natural.N12,
  },
  cellTextStyle: {
    textAlign: 'center',
    lineHeight: WP('11.5'),
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_22,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  codeTextStyle: {
    marginTop: WP('2'),
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  commonTextStyle: {
    color: GLColors.Blue.B2,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  newCodeStyle: {
    marginTop: WP('2'),
    color: GLColors.Natural.N6,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
});

export default styles;
