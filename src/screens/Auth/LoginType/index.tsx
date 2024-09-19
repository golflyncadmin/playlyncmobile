import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import InstagramLogin from 'react-native-instagram-login';
import {useAppleSignIn, useFacebookSignIn} from '../../../hooks';
import {
  AppButton,
  AppLoader,
  MainWrapper,
  AgreementModal,
} from '../../../components';
import {INS_APP_ID, INS_APP_SECRET, INS_REDIRECTION_URL} from '@env';
import {useSocialLoginMutation} from '../../../redux/auth/authApiSlice';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import styles from './styles';
import {
  EMAIL,
  Routes,
  GLColors,
  appIcons,
  showAlert,
  INS_SCOPES,
  LOGIN_TYPES,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';

interface LoginTypeProps {
  route: any;
  navigation: any;
}

const LoginType = ({route, navigation}: LoginTypeProps) => {
  const insRef = useRef();
  const dispatch = useDispatch();
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [insToken, setInsToken] = useState<string | null>(null);
  const [appleToken, setAppleToken] = useState<string | null>(null);
  const [facebookToken, setFacebookToken] = useState<string | null>(null);

  const {signInWithApple} = useAppleSignIn(setAppleToken);
  const {signInWithFacebook} = useFacebookSignIn(setFacebookToken);

  const [socialLogin, {isLoading}] = useSocialLoginMutation();

  useEffect(() => {
    setModalVisible(route?.params?.showModal);
  }, [route]);

  useEffect(() => {
    if (appleToken) handleSocialLogin(appleToken, 'apple');
  }, [appleToken]);

  useEffect(() => {
    if (facebookToken) handleSocialLogin(facebookToken, 'facebook');
  }, [facebookToken]);

  useEffect(() => {
    if (insToken) handleSocialLogin(insToken, 'instagram');
  }, [insToken]);

  const handleSocialLogin = async (token: string, provider: string) => {
    try {
      const data = {
        token: token,
        provider: provider,
      };

      const resp = await socialLogin(data);

      if (resp?.data) {
        handleLoginSuccess(resp?.data);
      } else {
        setInsToken(null);
        setAppleToken(null);
        setFacebookToken(null);
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
        insRef.current.show();
        break;
      case 'Manual':
        setModalVisible(true);
        break;

      default:
        break;
    }
  };

  const handleLoginSuccess = (res: any) => {
    setInsToken(null);
    setAppleToken(null);
    setFacebookToken(null);
    dispatch(setLoginUser(res?.data));
    dispatch(setAccessToken(res?.data?.token));

    navigation.replace(Routes.AppStack);
  };

  const handleNavigation = () => {
    if (isSelected) {
      setModalVisible(false);
      setTimeout(() => {
        setInsToken(null);
        setAppleToken(null);
        setFacebookToken(null);

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
          onPress={() => navigation.navigate(Routes.ReportIssue)}
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
      <InstagramLogin
        ref={insRef}
        appId={INS_APP_ID}
        scopes={INS_SCOPES}
        appSecret={INS_APP_SECRET}
        redirectUrl={INS_REDIRECTION_URL}
        closeStyle={styles.closeStyle}
        wrapperStyle={styles.wrapperStyle}
        containerStyle={styles.containerStyle}
        onLoginSuccess={(token: object | any) => {
          setInsToken(token?.access_token);
          console.log('Ins Token => ', token?.access_token);
        }}
        onLoginFailure={(data: any) => console.log('Ins Error => ', data)}
      />
    </MainWrapper>
  );
};

export default LoginType;
