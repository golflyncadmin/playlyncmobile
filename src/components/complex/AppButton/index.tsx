import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {GLColors, GLFonts, WP} from '../../../shared/exporter';
import {GLTextComponent} from '@components/primitive/Text';

interface ComponentProps {
  children?: any;
  config?: {
    style?: any;
    disabled?: boolean;
    size?: string;
    textSize?: string;
    type?: string;
    palette?: string;
    title: string;
    icon?: any;
    textStyle?: any;
  };
  events?: {
    handleClick?: () => void;
  };
}

function GLButtonComponent({
  children,
  config = {},
  events = {},
}: ComponentProps) {
  const buttonType = config.type || 'primary';

  const getButtonStyle = () => {
    let buttonStyle = {...styles.button};
    let style;

    switch (config.type) {
      case 'primary':
        style = style = styles.buttonPrimary;

        break;
      case 'tertiary':
        style = styles.buttonTertiary;
        break;
      default:
        style = styles.buttonSecondary;
    }

    switch (config.size) {
      case 'small':
        style = {...style, ...styles.buttonSizeSmall};
        break;
      case 'medium':
        style = {...style, ...styles.buttonSizeMedium};
        break;
    }

    buttonStyle = {...buttonStyle, ...style};

    if (config.disabled) {
      buttonStyle = {...buttonStyle, ...styles.buttonDisabled};
    }

    return buttonStyle;
  };

  const getTextStyle = () => {
    let style = {...styles.text, ...config.textStyle};

    switch (config.textSize) {
      case 'small':
        style = {...style, ...styles.textSmall};
        break;
      case 'medium':
        style = {...style, ...styles.textMedium};
        break;
      case 'large':
        style = {...style, ...styles.textLarge};
        break;
    }

    return style;
  };

  const getGradientColors = () => {
    let colors = [];
    switch (config.type) {
      case 'primary':
        colors = [GLColors.Green.Dark, GLColors.Green.ExtraLight];
        break;
      case 'secondary':
        colors = [GLColors.Green.Dark, GLColors.Green.ExtraLight];
        break;
      default:
        colors = [GLColors.Standard.Black, GLColors.Standard.White];
    }

    if (config.style?.backgroundColor) {
      colors = [config.style.backgroundColor, config.style.backgroundColor];
    }

    return colors;
  };

  const getIcon = () => {
    if (!config.icon) return null;

    return <SATextComponent>{config.icon}</SATextComponent>;
  };

  function handleClick() {
    if (events.handleClick) events.handleClick();
  }

  return (
    <TouchableOpacity
      disabled={config.disabled}
      onPress={handleClick}
      style={styles.shadow}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={getGradientColors()}
        style={{...getButtonStyle(), ...config.style}}>
        {getIcon()}
        {children || <Text style={getTextStyle()}>{config.title}</Text>}
      </LinearGradient>
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
    fontFamily: GLFonts.Foundation.Bold,
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
