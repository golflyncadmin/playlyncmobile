import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GLColors, GLFonts} from '../../../shared/exporter';

interface ComponentProps {
  children: any;
  config?: {
    bold?: boolean;
    color?: string;
    font?: string;
    size?: number;
    style?: object;
    uppercase?: boolean;
    lines?: number;
    width?: any;
  };
  events?: {
    handleClick?: () => void;
  };
}

function GLTextComponent({children, config = {}, events = {}}: ComponentProps) {
  function getStyle() {
    let style = {
      fontSize: 16,
      color: GLColors.Natural.White,
      fontFamily: GLFonts.Foundation.Regular,
    };

    if (config.size) {
      style = {...style, fontSize: config.size};
    }

    if (config.font) {
      style = {...style, fontFamily: config.font};
    }

    if (config.bold) {
      style = {...style, fontFamily: GLFonts.Foundation.Bold};
    }

    if (config.color) {
      style = {...style, color: config.color};
    }

    if (config.width) {
      style = {...style, width: config.width};
    }

    if (config.uppercase) {
      style = {...style, textTransform: 'uppercase'};
    }

    if (config.style) {
      style = {...style, ...config.style};
    }

    return style;
  }

  function handleClick() {
    if (events.handleClick) events.handleClick();
  }

  function renderText() {
    return (
      <TouchableOpacity
        disabled={events.handleClick ? false : true}
        onPress={handleClick}>
        <Text numberOfLines={config.lines} style={getStyle()}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }

  return renderText();
}

export {GLTextComponent};
