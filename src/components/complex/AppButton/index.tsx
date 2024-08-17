import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';

interface AppButtonProps {
  icon?: any;
  title: string;
  textStyle?: any;
  buttonStyle?: any;
  handleClick?: () => void;
}

function AppButton({
  icon,
  title,
  textStyle,
  buttonStyle,
  handleClick,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleClick}
      style={[styles.buttonContainer, buttonStyle]}>
      <View style={styles.emptyViewStyle} />
      <Text style={[styles.typeTextStyle, textStyle]}>{title}</Text>
      {icon ? icon : <View style={styles.emptyViewStyle} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderWidth: 1,
    height: WP('12'),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: WP('1'),
    marginBottom: WP('4'),
    paddingHorizontal: WP('5'),
    justifyContent: 'space-between',
    borderColor: GLColors.Natural.N15,
    backgroundColor: GLColors.Blue.B2,
  },
  typeTextStyle: {
    color: GLColors.Natural.White,
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  emptyViewStyle: {
    width: WP('7'),
    height: WP('7'),
  },
});

export {AppButton};
