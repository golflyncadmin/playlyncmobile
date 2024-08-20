import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {WP, GLColors} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';

interface AppInputProps {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  leftIcon?: any;
  editable?: boolean;
  errorMessage?: string | any;
  touched?: any;
  maxLength?: number;
  multiline?: boolean;
  container?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  rightIconPress?: () => void;
  keyboardType?: string | any;
  autoCapitalize?: string | any;
  rightIcon?: any;
  icon?: any;
  textAlignVertical?: string | any;
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  value,
  onChangeText,
  leftIcon,
  editable,
  errorMessage,
  touched,
  maxLength,
  multiline,
  secureTextEntry,
  onEndEditing,
  onSubmitEditing,
  keyboardType,
  autoCapitalize,
  rightIcon,
  inputStyle,
  icon,
  textAlignVertical,
  inputContainerStyle,
  rightIconPress,
}) => {
  const [showPass, setShowPass] = useState(secureTextEntry);

  return (
    <>
      <View
        style={[
          styles.inputContainerView(touched && errorMessage),
          inputContainerStyle,
        ]}>
        {leftIcon}
        <TextInput
          value={value}
          editable={editable}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={GLColors.Natural.N7}
          style={[styles.inputContainerStyle(rightIcon), inputStyle]}
          maxLength={maxLength}
          multiline={multiline}
          secureTextEntry={showPass}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          textAlignVertical={textAlignVertical}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => (icon ? rightIconPress() : setShowPass(!showPass))}>
            {icon ? icon : showPass ? svgIcon.EyeOffIcon : svgIcon.EyeOnIcon}
          </TouchableOpacity>
        )}
      </View>
      {touched && errorMessage && (
        <Text style={styles.errorTxtStyle}>{errorMessage}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerView: (isError: boolean) => ({
    width: '100%',
    borderWidth: 1,
    height: WP('12'),
    alignItems: 'center',
    borderRadius: WP('1'),
    flexDirection: 'row',
    marginTop: WP('4'),
    paddingHorizontal: WP('4'),
    justifyContent: 'space-between',
    borderColor: isError ? GLColors.Red.R6 : GLColors.Natural.N3,
  }),
  inputContainerStyle: (rightIcon: any) => ({
    height: WP('12'),
    width: rightIcon ? '80%' : '90%',
  }),
  errorTxtStyle: {
    marginVertical: WP('1'),
    color: GLColors.Red.R6,
    alignSelf: 'flex-start',
  },
});

export {AppInput};
