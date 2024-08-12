import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {GLFontsFamily} from './src/shared/theme/fontFamily';
import {GLColors, GLFontSize} from './src/shared/exporter';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleStyle}>Game Lync</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: GLColors.Blue.B1,
    fontSize: GLFontSize.FONT_SIZE_22,
    fontFamily: GLFontsFamily.Poppins_Bold,
  },
});

export default App;
