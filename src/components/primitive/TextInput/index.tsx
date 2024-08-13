import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {HP, GLColors, GLFontsFamily, WP, GLFontSize} from '../../../shared/exporter';
import {GLTextComponent} from '../../index';

interface AppInputProps {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  leftIcon?: any;
  editable?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  errorMessage?: any;
  touched?: any;
  renderErrorMessage?: any;
  maxLength?: number;
  multiline?: boolean;
  container?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  leftIconStyle?: StyleProp<ImageStyle>;
  keyboardType?: string;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  errorStyle?: StyleProp<TextStyle>;
  autoCapitalize?: string;
  rightTitle?: string;
  onPressRightTitle?: () => void;
  textAlignVertical?: string;
  rightIcon?: StyleProp<ImageStyle>;
  onPressRightIcon?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  editable,
  inputStyle,
  errorMessage,
  touched,
  renderErrorMessage,
  maxLength,
  multiline,
  container,
  secureTextEntry,
  inputContainerStyle,
  onEndEditing,
  onSubmitEditing,
  keyboardType,
  errorStyle,
  autoCapitalize,
  rightIcon,
  onPressRightIcon,
  rightTitle,
  textAlignVertical,
  onPressRightTitle,
}) => {
  const [showPass, setShowPass] = useState(secureTextEntry);

  return (
    <View>
      <GLTextComponent
        events={{handleClick: onPressRightTitle}}
        config={{
          color: GLColors.Natural.N12,
          size: GLFontSize.FONT_SIZE_14,
          font: GLFonts.Foundation.Regular,
        }}>
        {rightTitle}
      </GLTextComponent>
    </View>
  );
};

const styles = StyleSheet.create({});

export {AppInput};
