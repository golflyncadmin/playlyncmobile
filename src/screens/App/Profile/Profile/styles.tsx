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
  innerContainer: {
    marginBottom: WP('3'),
    marginHorizontal: WP('3.5'),
  },
  spacerView: {
    height: WP('10'),
  },
  headingTextStyle: {
    marginBottom: WP('2'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  rowContainer: {
    borderWidth: 1,
    height: WP('12'),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: WP('2'),
    borderRadius: WP('1'),
    paddingVertical: WP('2'),
    paddingHorizontal: WP('4'),
    justifyContent: 'space-between',
    borderColor: GLColors.Natural.N3,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    marginLeft: WP('2'),
    color: GLColors.Natural.N7,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: GLColors.Red.R4,
    backgroundColor: GLColors.Natural.White,
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    marginHorizontal: WP('3.5'),
  },
  textStyle: {
    color: GLColors.Red.R4,
  },
});

export default styles;
