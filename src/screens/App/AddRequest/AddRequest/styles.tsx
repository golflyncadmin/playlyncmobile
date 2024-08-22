import {StyleSheet} from 'react-native';
import {
  WP,
  isIOS,
  GLColors,
  scrHeight,
  GLFontSize,
  GLFontsFamily,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  spacerView: {
    height: WP('4'),
  },
  scrollViewStyle: {
    flex: 1,
  },
  heightStyle: {
    minHeight: scrHeight / 1.25,
  },
  contentContainer: {
    flexGrow: 1,
    marginTop: WP('5'),
    marginBottom: WP('1'),
  },
  innerView: {
    flexGrow: 1,
    marginHorizontal: WP('5'),
  },
  headingTextStyle: {
    marginTop: WP('4'),
    marginBottom: WP('-2'),
    color: GLColors.Natural.N8,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  inputStyle: {
    width: '100%',
    top: isIOS() ? 0 : 2,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  dateInputStyle: {
    width: '90%',
    top: isIOS() ? 0 : 2,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  countContainer: {
    marginTop: WP('1'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButtonStyle: {
    borderWidth: 1,
    width: WP('14'),
    height: WP('12'),
    alignItems: 'center',
    borderRadius: WP('1'),
    marginVertical: WP('3'),
    justifyContent: 'center',
    borderColor: GLColors.Natural.N3,
  },
  countButtonText: {
    top: isIOS() ? 0 : 2,
    color: GLColors.Natural.N7,
    fontSize: GLFontSize.FONT_SIZE_24,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  countTextStyle: {
    width: WP('6'),
    textAlign: 'center',
    top: isIOS() ? 0 : 2,
    marginHorizontal: WP('1'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  checkboxContainer: {
    marginTop: WP('1.5'),
    flexDirection: 'row',
    alignItems: 'center',
    left: isIOS() ? 2 : -2,
  },
  checkboxStyle: {
    width: WP('5'),
    height: WP('5'),
    marginRight: WP('2.5'),
  },
  labelStyle: {
    marginRight: WP('3.5'),
    bottom: isIOS() ? 1.5 : 0,
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  bottomView: {
    bottom: 0,
    position: 'absolute',
  },
});

export default styles;
