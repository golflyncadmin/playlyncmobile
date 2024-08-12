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
import {Input} from 'react-native-elements';
import {HP, GLColors, GLFonts, WP, GLFontSize} from '../../../shared/exporter';
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
    <View style={[styles.container, container]}>
      <Input
        textAlignVertical={textAlignVertical}
        placeholder={placeholder}
        placeholderTextColor={GLColors.Foundation.PlaceholderGray}
        value={value}
        editable={editable}
        leftIcon={leftIcon}
        inputContainerStyle={[
          styles.inputContainerStyle(leftIcon),
          inputContainerStyle,
        ]}
        containerStyle={styles.containerStyle}
        inputStyle={[styles.inputStyle, inputStyle]}
        onChangeText={onChangeText}
        errorMessage={touched && errorMessage}
        renderErrorMessage={renderErrorMessage}
        maxLength={maxLength}
        multiline={multiline}
        secureTextEntry={showPass}
        errorStyle={[styles.errorStyle, errorStyle]}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        rightIcon={
          <TouchableOpacity
            disabled={!onPressRightIcon ? true : false}
            onPress={() => {
              setShowPass(!showPass);
            }}>
            {rightIcon}
          </TouchableOpacity>
        }
      />
      <GLTextComponent
        events={{handleClick: onPressRightTitle}}
        config={{
          color: GLColors.Foundation.DarkGray,
          size: GLFontSize.FONT_SIZE_14,
          font: GLFonts.Foundation.Regular,
          style: styles.forgotText,
        }}>
        {rightTitle}
      </GLTextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: GLFontSize.FONT_SIZE_16,
    fontFamily: GLFonts.Foundation.Regular,
    color: GLColors.Standard.Black,
  },
  containerStyle: {
    borderColor: GLColors.Standard.White,
    height: HP(8),
  },
  inputContainerStyle: (leftIcon: any) => ({
    borderRadius: 30,
    borderColor: GLColors.Foundation.UltraLightGray,
    height: HP(6.5),
    backgroundColor: GLColors.Foundation.UltraLightGray,
    paddingLeft: leftIcon ? WP(5) : WP(7),
  }),
  container: {
    width: WP(94),
  },
  errorStyle: {
    paddingLeft: WP(4),
  },
  forgotText: {
    alignSelf: 'flex-end',
    right: WP(8),
  },
});

export {AppInput};
