import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppleSignIn, useFacebookSignIn} from '../../../hooks';
import {
  AppButton,
  AppLoader,
  MainWrapper,
  AgreementModal,
} from '../../../components';
import {useSocialLoginMutation} from '../../../redux/auth/authApiSlice';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import styles from './styles';
import {
  EMAIL,
  Routes,
  GLColors,
  appIcons,
  showAlert,
  LOGIN_TYPES,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';

interface LoginTypeProps {
  navigation: any;
}

const LoginType = ({navigation}: LoginTypeProps) => {
  const dispatch = useDispatch();
  const [apiRes, setApiRes] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [appleToken, setAppleToken] = useState<string | null>(null);
  const [facebookToken, setFacebookToken] = useState<string | null>(null);

  const {signInWithApple} = useAppleSignIn(setAppleToken);
  const {signInWithFacebook} = useFacebookSignIn(setFacebookToken);

  const [socialLogin, {isLoading}] = useSocialLoginMutation();

  useEffect(() => {
    if (appleToken) handleSocialLogin(appleToken, 'apple');
  }, [appleToken]);

  useEffect(() => {
    if (facebookToken) handleSocialLogin(facebookToken, 'facebook');
  }, [facebookToken]);

  const handleSocialLogin = async (token: string, provider: string) => {
    try {
      const data = {
        token: token,
        provider: provider,
      };

      const resp = await socialLogin(data);
      if (resp?.data) {
        console.log('RES => ', resp);
        return;
        setApiRes(resp?.data);
        setModalVisible(true);
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleLogin = (type: string) => {
    switch (type) {
      case 'Google':
        navigation.navigate('UserDetails');
        break;
      case 'Apple':
        signInWithApple();
        break;
      case 'Facebook':
        signInWithFacebook();
        break;
      case 'Instagram':
        navigation.navigate('UserDetails');
        break;
      case 'Manual':
        navigation.navigate(Routes.Login);
        break;

      default:
        break;
    }
  };

  const handleNavigation = () => {
    // TODO: Check if account is verified or not
    if (isSelected) {
      setModalVisible(false);
      setTimeout(() => {
        setAppleToken(null);
        setFacebookToken(null);
        dispatch(setLoginUser(apiRes?.data));
        dispatch(setAccessToken(apiRes?.data?.token));

        navigation.replace(Routes.AppStack);
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
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default LoginType;
