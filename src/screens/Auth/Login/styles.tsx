import {StyleSheet} from 'react-native';
import {
  WP,
  isIOS,
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
  loginWithStyle: {
    marginTop: WP('4'),
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  iconContainer: {
    marginTop: WP('3'),
    marginBottom: WP('3'),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: WP('5'),
    width: isIOS() ? '95%' : '75%',
    justifyContent: 'space-between',
  },
  iconView: {
    width: WP('12'),
    height: WP('12'),
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: WP('1'),
    justifyContent: 'center',
    borderColor: GLColors.Natural.N3,
  },
  forgotTextStyle: {
    marginTop: WP('3.5'),
    marginBottom: WP('5'),
    color: GLColors.Natural.N10,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  accountTextStyle: {
    marginTop: WP('2'),
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  signUpStyle: {
    color: GLColors.Blue.B2,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  contactUsStyle: {
    marginTop: WP('8'),
    color: GLColors.Blue.B2,
    textDecorationLine: 'underline',
    fontSize: GLFontSize.FONT_SIZE_15,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  closeStyle: {
    top: WP('12'),
    right: WP('4.5'),
  },
  wrapperStyle: {
    borderWidth: WP('1'),
    borderRadius: WP('3'),
    borderColor: GLColors.Blue.B2,
  },
  containerStyle: {
    borderRadius: WP('2'),
    borderColor: GLColors.Blue.B2,
  },
});

export default styles;
