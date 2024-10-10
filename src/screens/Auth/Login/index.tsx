import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import InstagramLogin from 'react-native-instagram-login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  useAppleSignIn,
  useGoogleSignIn,
  useFacebookSignIn,
} from '../../../hooks';
import {INS_APP_ID, INS_APP_SECRET, INS_REDIRECTION_URL} from '@env';
import {
  useLoginMutation,
  useSocialLoginMutation,
} from '../../../redux/auth/authApiSlice';
import {
  getFCMToken,
  createNotifyChannel,
} from '../../../shared/utils/notificationService';
import {AppButton, AppInput, AppLoader, MainWrapper} from '../../../components';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import styles from './styles';
import {
  isIOS,
  APPLE,
  Routes,
  GOOGLE,
  appIcons,
  FACEBOOK,
  showAlert,
  INSTAGRAM,
  INS_SCOPES,
  LOGIN_TYPES,
  VERIFY_BOTH,
  VERIFY_EMAIL,
  VERIFY_PHONE,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';
import {
  loginForm,
  loginValidationSchema,
} from '../../../shared/utils/validations';
import {svgIcon} from '../../../assets/svg';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  let isValidForm = true;
  const insRef: any = useRef();
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const [fcmToken, setFCMToken] = useState<string>('');
  const [insToken, setInsToken] = useState<string | null>(null);
  const [appleToken, setAppleToken] = useState<string | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [facebookToken, setFacebookToken] = useState<string | null>(null);

  const {signInWithApple} = useAppleSignIn(setAppleToken);
  const {signInWithGoogle} = useGoogleSignIn(setGoogleToken);
  const {signInWithFacebook} = useFacebookSignIn(setFacebookToken);

  const [login, {isLoading: loading}] = useLoginMutation();
  const [socialLogin, {isLoading}] = useSocialLoginMutation();

  useEffect(() => {
    (async () => {
      const token = await getFCMToken();
      if (token?.fcmToken) {
        setFCMToken(token?.fcmToken);
        createNotifyChannel();
      }
    })();
  }, []);

  useEffect(() => {
    if (appleToken) handleSocialLogin(appleToken, APPLE);
  }, [appleToken]);

  useEffect(() => {
    if (googleToken) handleSocialLogin(googleToken, GOOGLE);
  }, [googleToken]);

  useEffect(() => {
    if (facebookToken) handleSocialLogin(facebookToken, FACEBOOK);
  }, [facebookToken]);

  useEffect(() => {
    if (insToken) handleSocialLogin(insToken, INSTAGRAM);
  }, [insToken]);

  const handleSocialLogin = async (token: string, provider: string) => {
    try {
      const data = {
        token: token,
        fcm_token: fcmToken,
        provider: provider.toLowerCase(),
      };

      const resp = await socialLogin(data);
      if (resp?.data) {
        handleLoginSuccess(resp?.data);
      } else {
        setInsToken(null);
        setAppleToken(null);
        setFacebookToken(null);
        await GoogleSignin.signOut();
        showAlert('Error', resp?.error?.data?.message || GENERIC_ERROR_TEXT);
      }
    } catch (error: any) {
      await GoogleSignin.signOut();
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleLogin = async (values: any) => {
    const {email, password} = values;
    try {
      const data = {
        email: email,
        password: password,
        fcm_token: fcmToken,
      };

      const resp = await login(data);
      if (resp?.data) {
        handleLoginSuccess(resp?.data);
      } else {
        const {message, data} = resp?.error?.data;
        if (message === VERIFY_EMAIL || message === VERIFY_BOTH) {
          showAlert('Error', message, () => {
            navigation.navigate(Routes.AccountVerification, {
              email: data?.email,
              phone: data?.phone_number,
            });
          });
        } else if (message === VERIFY_PHONE) {
          showAlert('Error', message, () => {
            navigation.navigate(Routes.AccountVerification, {
              email: '',
              phone: data?.phone_number,
            });
          });
        } else {
          showAlert('Error', message);
        }
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleSocialSignIn = (type: string) => {
    switch (type) {
      case GOOGLE:
        signInWithGoogle();
        break;
      case APPLE:
        signInWithApple();
        break;
      case FACEBOOK:
        signInWithFacebook();
        break;
      case INSTAGRAM:
        insRef.current.show();
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

  return (
    <MainWrapper style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContent}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={appIcons.appLogo}
              style={styles.logoStyle}
            />
          </View>
          <Formik
            innerRef={formikRef}
            initialValues={loginForm}
            validationSchema={loginValidationSchema}
            onSubmit={(values: any) => handleLogin(values)}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleSubmit,
              handleChange,
            }) => {
              if (isValidForm) {
                isValid = false;
                isValidForm = false;
              }
              return (
                <View style={styles.contentContainer}>
                  <Text style={styles.headingStyle}>Login</Text>
                  <Text style={styles.loginWithStyle}>or login with</Text>
                  <View style={styles.iconContainer}>
                    {LOGIN_TYPES?.slice(0, 4)?.map((item: object | any) => {
                      const isNoIcon = item?.icon === null;
                      if (isNoIcon) return;
                      return (
                        <TouchableOpacity
                          key={item?.id}
                          activeOpacity={0.7}
                          onPress={() => handleSocialSignIn(item?.type)}
                          style={styles.iconView}>
                          {item?.icon}
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <AppInput
                    placeholder="Email*"
                    value={values.email}
                    touched={touched.email}
                    autoCapitalize="none"
                    leftIcon={svgIcon.MailIcon}
                    errorMessage={errors.email}
                    onChangeText={handleChange('email')}
                  />
                  <AppInput
                    placeholder="Password*"
                    value={values.password}
                    autoCapitalize="none"
                    touched={touched.password}
                    leftIcon={svgIcon.LockIcon}
                    rightIcon={svgIcon.EyeOffIcon}
                    errorMessage={errors.password}
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                  />
                  <Text
                    suppressHighlighting
                    style={styles.forgotTextStyle}
                    onPress={() => navigation.navigate(Routes.ForgotPassword)}>
                    Forgot Password?
                  </Text>
                  <AppButton
                    title={'Login'}
                    disabled={!isValid}
                    handleClick={handleSubmit}
                  />
                  <Text style={styles.accountTextStyle}>
                    Create an account?{' '}
                    <Text
                      suppressHighlighting
                      style={styles.signUpStyle}
                      onPress={() => navigation.replace(Routes.SignUp)}>
                      Sign up
                    </Text>
                  </Text>
                  <Text
                    suppressHighlighting
                    onPress={() =>
                      navigation.navigate(Routes.ReportIssue, {message: ''})
                    }
                    style={styles.contactUsStyle}>
                    Contact Us
                  </Text>
                </View>
              );
            }}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      {(loading || isLoading) && <AppLoader />}
      <InstagramLogin
        ref={insRef}
        appId={INS_APP_ID}
        scopes={INS_SCOPES}
        appSecret={INS_APP_SECRET}
        redirectUrl={INS_REDIRECTION_URL}
        closeStyle={styles.closeStyle}
        wrapperStyle={styles.wrapperStyle}
        containerStyle={styles.containerStyle}
        onLoginSuccess={(token: object | any) =>
          setInsToken(token?.access_token)
        }
        onLoginFailure={(data: any) => console.log('Ins Error => ', data)}
      />
    </MainWrapper>
  );
};

export default Login;
