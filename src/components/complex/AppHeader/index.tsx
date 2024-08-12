import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {GLColors, GLFonts, WP, GLFontSize, HP} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import {GLTextComponent} from '../../../components';
import {useNavigation} from '@react-navigation/native';

interface AppHeaderProps {
  title?: string;
  subTitle?: string;
  destext?: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({title, subTitle, destext}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.conatiner}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          {svgIcon.backButton}
        </TouchableOpacity>
        {title && (
          <GLTextComponent
            config={{
              font: GLFonts.Foundation.Bold,
              color: GLColors.Standard.Black,
              size: GLFontSize.FONT_SIZE_20,
            }}>
            {title}
          </GLTextComponent>
        )}
      </View>
      {subTitle && (
        <GLTextComponent
          config={{
            font: GLFonts.Foundation.Bold,
            color: GLColors.Green.Dark,
            size: GLFontSize.FONT_SIZE_26,
            style: styles.subtitleText,
          }}>
          {subTitle}
        </GLTextComponent>
      )}
      {destext && (
        <GLTextComponent
          config={{
            font: GLFonts.Foundation.Regular,
            color: GLColors.Foundation.DarkGray,
            size: GLFontSize.FONT_SIZE_16,
            style: styles.descText,
          }}>
          {destext}
        </GLTextComponent>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HP(5),
    marginTop: HP(1),
  },
  textStyle: {
    fontSize: GLFontSize.FONT_SIZE_20,
  },

  backButton: {
    position: 'absolute',
    left: WP(2),
  },
  subtitleText: {
    textAlign: 'center',
    marginTop: HP(-2.5),
  },
  descText: {
    textAlign: 'center',
    paddingVertical: HP(2),
    lineHeight: 25,
  },
});

export {AppHeader};
