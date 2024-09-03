import React, {useEffect} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import {appIcons} from '../../../shared/exporter';

interface SplashProps {
  navigation: any;
}

const Splash = ({navigation}: SplashProps) => {
  const {accessToken, isWalkthrough} = useSelector(
    (state: object | any) => state?.auth,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (accessToken) {
        navigation.replace('AppStack');
      } else if (isWalkthrough) {
        navigation.replace('AuthStack');
      } else {
        navigation.replace('IntroStack');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [accessToken, isWalkthrough, navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Image
        resizeMode="contain"
        source={appIcons.appLogo}
        style={styles.logoStyle}
      />
    </View>
  );
};

export default Splash;
