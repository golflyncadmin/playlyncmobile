import {Image, View} from 'react-native';
import React from 'react';
import {svgIcon} from '../../../assets/svg/index';
import styles from './styles';
import {Routes, APP_INTRO_SLIDES} from '../../../shared/exporter';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch} from 'react-redux';
import {setIsWalkthrough} from '../../../redux/auth/authSlice';

interface AppIntroScreenProps {
  navigation: any;
}

const AppIntro = ({navigation}: AppIntroScreenProps) => {
  const dispatch = useDispatch();

  const renderItem = ({item}: {item: (typeof APP_INTRO_SLIDES)[0]}) => {
    return (
      <View>
        <Image
          style={styles.imageStyles}
          source={item.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate(Routes.LoginScreen);
    dispatch(setIsWalkthrough());
  };

  const renderNextButton = () => {
    return <View style={styles.nextBtn}>{svgIcon.ChevronRight}</View>;
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={APP_INTRO_SLIDES}
        showSkipButton
        onDone={onDone}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.inActiveDotStyle}
      />
    </View>
  );
};

export default AppIntro;
