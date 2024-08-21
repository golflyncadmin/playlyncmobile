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
    marginBottom: WP('2'),
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_32,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
  buttonStyle: {
    marginTop: WP('9'),
  },
});

export default styles;
