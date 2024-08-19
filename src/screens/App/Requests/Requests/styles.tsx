import {StyleSheet} from 'react-native';
import {
  WP,
  isIOS,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
  spacerView: {
    height: WP('6'),
  },
  flContainer: {
    marginHorizontal: WP('4'),
  },
  previousRequestsStyle: {
    marginBottom: WP('3'),
    alignSelf: 'flex-end',
    color: GLColors.Blue.B2,
    marginHorizontal: WP('4'),
    textDecorationLine: 'underline',
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  itemContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: WP('2'),
    marginBottom: WP('2'),
    alignItems: 'center',
    paddingVertical: WP('4'),
    paddingHorizontal: WP('3'),
    borderColor: GLColors.Natural.N3,
  },
  reqItemContainer: {
    paddingBottom: WP('2'),
    alignItems: 'flex-start',
    borderColor: GLColors.Blue.B2,
    backgroundColor: GLColors.Blue.B3,
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: WP('1'),
    paddingVertical: WP('2.5'),
    justifyContent: 'center',
    paddingHorizontal: WP('2'),
    backgroundColor: GLColors.Natural.N2,
  },
  activeMemberContainer: {
    backgroundColor: GLColors.Blue.B2,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberCountStyle: {
    marginLeft: 2,
    top: isIOS() ? 0 : 2,
    color: GLColors.Natural.N7,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Regular,
  },
  activeMemberCountStyle: {
    color: GLColors.Natural.White,
  },
  contentContainer: {
    flex: 1,
    marginLeft: WP('3'),
  },
  addRequestStyle: {
    paddingVertical: WP('2'),
    color: GLColors.Natural.N18,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: WP('2'),
  },
  infoTextStyle: {
    marginLeft: WP('2'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  buttonStyle: {
    borderWidth: 1,
    height: WP('8'),
    marginTop: WP('3'),
    marginBottom: WP('2'),
    borderColor: GLColors.Red.R4,
    backgroundColor: GLColors.Blue.B3,
  },
  textStyle: {
    color: GLColors.Red.R4,
    fontSize: GLFontSize.FONT_SIZE_14,
  },
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecordTextStyle: {
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_22,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
});

export default styles;
