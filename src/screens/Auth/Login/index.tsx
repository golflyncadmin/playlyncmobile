import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppleSignIn, useFacebookSignIn} from '../../../hooks';
import {
  useLoginMutation,
  useSocialLoginMutation,
} from '../../../redux/auth/authApiSlice';
import {AppButton, AppInput, AppLoader, MainWrapper} from '../../../components';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import styles from './styles';
import {
  isIOS,
  Routes,
  appIcons,
  showAlert,
  LOGIN_TYPES,
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
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const [appleToken, setAppleToken] = useState<string | null>(null);
  const [facebookToken, setFacebookToken] = useState<string | null>(null);

  const {signInWithApple} = useAppleSignIn(setAppleToken);
  const {signInWithFacebook} = useFacebookSignIn(setFacebookToken);

  const [login, {isLoading: loading}] = useLoginMutation();
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
        handleLoginSuccess(resp?.data);
      } else {
        showAlert('Login Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Login Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleLogin = async (values: any) => {
    const {email, password} = values;
    try {
      const data = {
        email: email,
        password: password,
      };

      const resp = await login(data);
      if (resp?.data) {
        handleLoginSuccess(resp?.data);
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const handleSocialSignIn = (type: string) => {
    switch (type) {
      case 'Google':
        navigation.navigate('');
        break;
      case 'Apple':
        signInWithApple();
        break;
      case 'Facebook':
        signInWithFacebook();
        break;
      case 'Instagram':
        navigation.navigate('');
        break;

      default:
        break;
    }
  };

  const handleLoginSuccess = (res: any) => {
    // TODO: Check if account is verified or not
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
                    onPress={() => {}}
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
    </MainWrapper>
  );
};

export default Login;
