import {StyleSheet} from 'react-native';
import {GLFontSize, GLFontsFamily} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoTextStyle: {
    fontSize: GLFontSize.FONT_SIZE_22,
    fontFamily: GLFontsFamily.Poppins_SemiBold,
  },
});

export default styles;
