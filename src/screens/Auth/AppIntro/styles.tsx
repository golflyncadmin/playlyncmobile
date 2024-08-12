import {StyleSheet} from 'react-native';
import {HP, GLColors, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyles: {
    height: HP(100),
    width: WP(100),
  },
  activeDotStyle: {
    backgroundColor: GLColors.Standard.White,
    width: 30,
  },
  inActiveDotStyle: {
    backgroundColor: '#d1d1d1',
  },
  nextBtn: {
    // static values necessary/dependency node module
    position: 'absolute',
    right: WP(70),
    backgroundColor: GLColors.Standard.White,
    borderRadius: 200,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
});
export default styles;
