import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle, StatusBar} from 'react-native';
import {GLColors} from '../../../shared/exporter';

interface MainWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const MainWrapper: React.FC<MainWrapperProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GLColors.Natural.White,
  },
});

export {MainWrapper};
