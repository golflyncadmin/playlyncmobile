import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  WP,
  Routes,
  GLColors,
  GLFontSize,
  GLFontsFamily,
} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import {useNavigation} from '@react-navigation/native';

interface AppHeaderProps {
  title?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
}
const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  leftIcon = true,
  rightIcon = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        {leftIcon ? svgIcon.BackIcon : <View style={styles.emptyView} />}
      </TouchableOpacity>
      <Text style={styles.textStyle}>{title}</Text>
      {rightIcon ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate(Routes.AlertsStack)}>
          {svgIcon.NotifyIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyView} />
      )}
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
