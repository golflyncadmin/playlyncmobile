import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  WP,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/native';

interface AppHeaderProps {
  title?: string;
  leftIcon?: boolean;
}
const AppHeader: React.FC<AppHeaderProps> = ({title, leftIcon = true}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        {leftIcon ? svgIcon.BackIcon : <View style={styles.emptyView} />}
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
      <View style={styles.emptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: WP('2'),
    marginHorizontal: WP('4'),
    justifyContent: 'space-between',
  },
  textStyle: {
    color: GLColors.Natural.N11,
    fontSize: GLFontSize.FONT_SIZE_20,
    fontFamily: GLFontsFamily.Poppins_Medium,
  },
  emptyView: {
    width: WP('6'),
    height: WP('6'),
  },
});

export {AppHeader};
