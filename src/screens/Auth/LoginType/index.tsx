import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useAppleSignIn} from '../../../hooks';
import {AppButton, MainWrapper, AgreementModal} from '../../../components';
import styles from './styles';
import {
  EMAIL,
  Routes,
  GLColors,
  appIcons,
  showAlert,
  LOGIN_TYPES,
} from '../../../shared/exporter';

interface LoginTypeProps {
  navigation: any;
}

const LoginType = ({navigation}: LoginTypeProps) => {
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [appleToken, setAppleToken] = useState<string | null>(null);

  const {signInWithApple} = useAppleSignIn(setAppleToken);

  useEffect(() => {
    if (appleToken) {
      console.log('APPLE TOKEN : ', appleToken);
    }
  }, [appleToken]);

  const handleLogin = (type: string) => {
    switch (type) {
      case 'Google':
        break;
      case 'Apple':
        signInWithApple();
        break;
      case 'Facebook':
        break;
      case 'Instagram':
        break;

      default:
        break;
    }
  };

  const handleNavigation = () => {
    if (isSelected) {
      setModalVisible(false);
      setTimeout(() => {
        navigation.replace(Routes.Login);
      }, 500);
    } else {
      showAlert('Missing Selection', 'Select agreement to proceed further.');
    }
  };

  return (
    <MainWrapper style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={appIcons.appLogo}
          style={styles.logoStyle}
        />
      </View>
      <View style={styles.contentContainer}>
        {LOGIN_TYPES?.map((item: object | any) => (
          <AppButton
            icon={item?.icon}
            title={item?.title}
            handleClick={() => handleLogin(item?.type)}
            textStyle={
              item?.title !== EMAIL ? {color: GLColors.Natural.Black} : {}
            }
            buttonStyle={
              item?.title !== EMAIL
                ? {backgroundColor: GLColors.Natural.White}
                : {}
            }
          />
        ))}
        <Text style={styles.accountTextStyle}>
          Don't have an account?{' '}
          <Text
            suppressHighlighting
            style={styles.signUpStyle}
            onPress={() => navigation.navigate(Routes.SignUp)}>
            Sign up
          </Text>
        </Text>
        <Text
          suppressHighlighting
          onPress={() => {}}
          style={styles.contactUsStyle}>
          Contact Us
        </Text>
      </View>
      <AgreementModal
        isSelected={isSelected}
        modalVisible={modalVisible}
        handleClick={() => handleNavigation()}
        setSelection={() => setSelection(!isSelected)}
        setModalVisible={() => setModalVisible(false)}
      />
    </MainWrapper>
  );
};

export default LoginType;
