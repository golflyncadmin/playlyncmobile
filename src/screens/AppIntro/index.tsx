import React from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native';
import {useDispatch} from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import {svgIcon} from '../../assets/svg/index';
import styles from './styles';
import {Routes, APP_INTRO_SLIDES} from '../../shared/exporter';
import {setIsWalkthrough} from '../../redux/auth/authSlice';

interface AppIntroScreenProps {
  navigation: any;
}

const AppIntro = ({navigation}: AppIntroScreenProps) => {
  const dispatch = useDispatch();

  const renderItem = ({item}: {item: (typeof APP_INTRO_SLIDES)[0]}) => (
    <ImageBackground style={styles.imageStyles} source={item.image}>
      <View style={styles.textContainer}>
        <Text style={styles.titleTextStyle}>{item?.title}</Text>
        <Text style={styles.infoTextStyle}>{item?.info}</Text>
      </View>
    </ImageBackground>
  );

  const onDone = () => {
    dispatch(setIsWalkthrough());
    navigation.replace(Routes.AuthStack);
  };

  const renderNextButton = () => (
    <View style={styles.nextContainer}>{svgIcon.ForwardIcon}</View>
  );

  const renderSkipButton = () => (
    <View style={styles.skipContainer}>
      <Text style={styles.skipTextStyle}>Skip</Text>
    </View>
  );

  const keyExtractor = (item: object | any) => item?.key;

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <AppIntroSlider
        data={APP_INTRO_SLIDES}
        showSkipButton
        onSkip={onDone}
        onDone={onDone}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        renderDoneButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        renderNextButton={renderNextButton}
        dotStyle={styles.inActiveDotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default AppIntro;
