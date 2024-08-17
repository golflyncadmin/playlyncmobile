import {StyleSheet} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
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
    marginVertical: WP('2'),
    marginHorizontal: WP('4'),
  },
  accountTextStyle: {
    marginTop: WP('2'),
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  signUpStyle: {
    color: GLColors.Blue.B2,
  },
  contactUsStyle: {
    marginTop: WP('8'),
    color: GLColors.Blue.B2,
    textDecorationLine: 'underline',
    fontSize: GLFontSize.FONT_SIZE_15,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
});

export default styles;
