import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, AppLoader, MainWrapper} from '../../../components';
import {
  isIOS,
  Routes,
  appIcons,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';
import {useSignUpMutation} from '../../../redux/auth/authApiSlice';
import {
  signUpForm,
  signUpValidationSchema,
} from '../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../assets/svg';

interface SignUpProps {
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  let isValidForm = true;
  const formikRef = useRef(null);

  const [signUp, {isLoading}] = useSignUpMutation();

  const handleSignUp = async (values: any) => {
    const {email, phoneNumber, password} = values;
    try {
      const data = {
        email: email,
        password: password,
        phone_number: phoneNumber,
      };

      const resp = await signUp(data);
      if (resp?.data) {
        navigation.navigate(Routes.OTPVerification, {
          email: email,
          isForgot: false,
          phone: phoneNumber,
        });
      } else {
        showAlert('Error', resp?.error?.data?.message?.join('\n'));
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
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
            initialValues={signUpForm}
            validationSchema={signUpValidationSchema}
            onSubmit={(values: any) => handleSignUp(values)}>
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
                  <Text style={styles.headingStyle}>Create Account</Text>
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
                    placeholder="Phone Number*"
                    value={values.phoneNumber}
                    touched={touched.phoneNumber}
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    leftIcon={svgIcon.PhoneIcon}
                    errorMessage={errors.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
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
                  <AppInput
                    placeholder="Password Confirmation*"
                    autoCapitalize="none"
                    leftIcon={svgIcon.LockIcon}
                    rightIcon={svgIcon.EyeOnIcon}
                    value={values.confirmPassword}
                    touched={touched.confirmPassword}
                    errorMessage={errors.confirmPassword}
                    secureTextEntry={true}
                    onChangeText={handleChange('confirmPassword')}
                  />
                  <View style={styles.emptyView} />
                  <AppButton
                    title={'Next'}
                    disabled={!isValid}
                    handleClick={handleSubmit}
                  />
                  <Text style={styles.memberTextStyle}>
                    Already a member?{' '}
                    <Text
                      suppressHighlighting
                      style={styles.loginStyle}
                      onPress={() => navigation.replace(Routes.Login)}>
                      Login
                    </Text>
                  </Text>
                </View>
              );
            }}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default SignUp;
