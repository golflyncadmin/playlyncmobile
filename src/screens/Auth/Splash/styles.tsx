import {StyleSheet} from 'react-native';
import {GLColors, WP} from '../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GLColors.Blue.B3,
  },
  logoStyle: {
    width: WP('45'),
    height: WP('31'),
  },
});

export default styles;
