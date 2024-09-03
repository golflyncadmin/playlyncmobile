import {StyleSheet} from 'react-native';
import {
  WP,
  GLColors,
  scrWidth,
  scrHeight,
  GLFontSize,
  GLFontsFamily,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  scrollViewStyle: {
    flex: 1,
  },
  heightStyle: {
    minHeight: scrHeight / 1.2,
  },
  contentContainer: {
    flexGrow: 1,
    marginVertical: WP('5'),
  },
  innerView: {
    marginHorizontal: WP('5'),
  },
  headingTextStyle: {
    marginTop: WP('7'),
    marginBottom: WP('-1'),
    color: GLColors.Natural.N8,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  spacerView: {
    height: WP('3'),
  },
  inputContainerStyle: {
    height: WP('20'),
    textAlignVertical: 'top',
  },
  inputStyle: {
    width: '100%',
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  descInputStyle: {
    width: '100%',
    height: WP('18'),
    textAlignVertical: 'top',
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  limitTextStyle: {
    marginTop: WP('1'),
    color: `${GLColors.Natural.N10}60`,
    fontSize: GLFontSize.FONT_SIZE_10,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  bottomView: {
    bottom: 0,
    width: scrWidth,
    position: 'absolute',
  },
  separatorView: {
    height: WP('6'),
    borderBottomWidth: 1,
    marginVertical: WP('4'),
    backgroundColor: GLColors.Natural.N12,
    borderBottomColor: GLColors.Natural.N4,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginHorizontal: WP('5'),
    justifyContent: 'space-between',
  },
  cancelButtonStyle: {
    width: '48%',
    borderWidth: 1,
    height: WP('8'),
    paddingHorizontal: 0,
    marginBottom: WP('2'),
    borderColor: GLColors.Natural.N7,
    backgroundColor: GLColors.Natural.White,
  },
  actionButtonStyle: {
    width: '48%',
    borderWidth: 1,
    height: WP('8'),
    paddingHorizontal: 0,
    marginBottom: WP('2'),
  },
  cancelTextStyle: {
    width: WP('43'),
    textAlign: 'center',
    color: GLColors.Natural.N9,
    fontSize: GLFontSize.FONT_SIZE_14,
  },
  actionTextStyle: {
    width: WP('43'),
    textAlign: 'center',
    fontSize: GLFontSize.FONT_SIZE_14,
  },
});

export default styles;
