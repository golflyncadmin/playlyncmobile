import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {WP} from '../../../shared/exporter';
import {GLTextComponent} from '@components/primitive/Text';

interface ComponentProps {
  style?: any;
  title: string;
  textStyle?: any;
  handleClick?: () => void;
}

function GLButtonComponent({}: ComponentProps) {
  return (
    <TouchableOpacity
      // onPress={handleClick}
      style={styles.shadow}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 18,
    borderRadius: 30,
    borderCurve: 'continuous',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonSizeSmall: {
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    width: WP(30),
  },
  buttonSizeMedium: {
    padding: 10,
  },
  buttonPrimary: {},
  buttonSecondary: {
    width: WP(42),
    padding: 15,
  },
  buttonTertiary: {},
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  textSmall: {
    fontSize: 12,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 18,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export {GLButtonComponent};
