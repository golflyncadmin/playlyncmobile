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
  titleTextStyle: {
    marginTop: WP('4'),
    marginBottom: WP('-2'),
    color: GLColors.Natural.N8,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  inputStyle: {
    paddingTop: isIOS() ? 0 : WP('3'),
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  dateInputStyle: {
    width: '90%',
    color: GLColors.Natural.Black,
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
  locationsContainer: {
    zIndex: 99,
    width: '90%',
    alignSelf: 'center',
    marginTop: isIOS() ? scrHeight / 3.7 : scrHeight / 4.3,
    height: scrHeight / 1.6,
    position: 'absolute',
    marginHorizontal: WP('5'),
    paddingVertical: WP('2'),
    borderBottomEndRadius: WP('2'),
    borderBottomStartRadius: WP('2'),
    backgroundColor: GLColors.Natural.White,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderWidth: 1,
    paddingHorizontal: WP('4'),
    borderColor: GLColors.Natural.N3,
  },
  headingTextStyle: {
    marginVertical: WP('2'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: WP('1'),
    marginVertical: WP('1'),
    paddingVertical: WP('1'),
    paddingHorizontal: WP('1.5'),
    backgroundColor: GLColors.Natural.N3,
  },
  itemTextStyle: {
    width: '95%',
    color: GLColors.Natural.N11,
    paddingHorizontal: WP('1.5'),
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  emptyView: {
    alignItems: 'center',
    height: scrHeight / 4,
    justifyContent: 'center',
  },
  emptyTextStyle: {
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
});

export default styles;
