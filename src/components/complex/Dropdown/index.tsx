import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  WP,
  isIOS,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {Dropdown as AppDropdown} from 'react-native-element-dropdown';

interface ComponentProps {
  locationsArr?: any;
  dropDownStyle?: object;
  placeholder?: string;
  onChange?: (v: any) => void;
  location?: any;
  selectedTextStyle?: any;
}

function Dropdown({
  locationsArr,
  dropDownStyle,
  onChange,
  location,
  placeholder,
  selectedTextStyle,
}: ComponentProps) {
  const [value, setValue] = useState(location ? location : '');

  const handleChange = (item: any) => {
    setValue(item.value);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <AppDropdown
        style={dropDownStyle ? dropDownStyle : styles.dropDownStyle}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={
          selectedTextStyle ? selectedTextStyle : styles.selectedTextStyle
        }
        itemTextStyle={styles.itemTextStyle}
        data={locationsArr}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        containerStyle={styles.dropDownContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: WP('6'),
  },
  dropDownContainer: {
    top: isIOS() ? 0 : -5,
  },
  dropDownStyle: {
    width: '100%',
    borderWidth: 1,
    height: WP('12'),
    alignSelf: 'center',
    borderRadius: WP('1'),
    paddingHorizontal: WP('4'),
    borderColor: GLColors.Natural.N3,
    backgroundColor: GLColors.Natural.White,
  },
  placeholder: {
    color: GLColors.Natural.N7,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  selectedTextStyle: {
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  itemTextStyle: {
    color: GLColors.Natural.Black,
    fontSize: GLFontSize.FONT_SIZE_14,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
});

export {Dropdown};
