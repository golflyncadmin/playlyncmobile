import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, MainWrapper} from '../../../components';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import styles from './styles';
import {LOGIN_TYPES, Routes, appIcons, isIOS} from '../../../shared/exporter';
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

  const handleLogin = (values: any) => {
    console.log('Values => ', values);
    handleLoginSuccess([]);
  };

  const handleSocialLogin = () => {
    handleLoginSuccess([]);
  };

  const handleLoginSuccess = (res: any) => {
    dispatch(setLoginUser({name: 'adeel', email: 'adeel@gmail.com'}));
    dispatch(setAccessToken('SDFGSD#$@%DFSGS'));
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
                          onPress={() => handleSocialLogin()}
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
    </MainWrapper>
  );
};

export default Login;
