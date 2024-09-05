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
  dataContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: WP('3'),
  },
  alertTextStyle: {
    paddingTop: WP('2'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_20,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  flContainer: {
    margin: WP('5'),
  },
  itemContainer: {
    borderWidth: 1,
    padding: WP('3'),
    paddingBottom: 0,
    alignItems: 'center',
    marginBottom: WP('5'),
    borderRadius: WP('2'),
    borderColor: GLColors.Blue.B2,
    backgroundColor: GLColors.Blue.B3,
  },
  itemRowContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: WP('2'),
    justifyContent: 'space-between',
  },
  titleStyle: {
    width: '70%',
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  timeTextStyle: {
    marginBottom: WP('1'),
    alignSelf: 'flex-start',
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_13,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  infoStyle: {
    color: GLColors.Blue.B2,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  timeSlotStyle: {
    width: '50%',
    textAlign: 'right',
    color: GLColors.Blue.B2,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  smallButtonStyle: {
    width: WP('32.5'),
    height: WP('6'),
    marginTop: WP('4'),
    paddingHorizontal: 0,
    marginBottom: WP('6'),
    alignSelf: 'flex-start',
    borderColor: GLColors.Blue.B2,
    backgroundColor: GLColors.Blue.B3,
  },
  buttonTextStyle: {
    width: WP('32'),
    textAlign: 'center',
    color: GLColors.Blue.B2,
    fontSize: GLFontSize.FONT_SIZE_12,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  logoContainer: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: WP('45'),
    height: WP('31'),
    marginTop: WP('6'),
  },
  contentContainer: {
    flex: 0.55,
    marginBottom: WP('2'),
    marginHorizontal: WP('4'),
  },
  rowContainer: {
    marginBottom: WP('4'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTextStyle: {
    marginLeft: WP('3'),
    marginRight: WP('5'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  buttonStyle: {
    bottom: 0,
    position: 'absolute',
  },
});

export default styles;
