import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, MainWrapper} from '../../../components';
import styles from './styles';
import {Routes, appIcons, isIOS} from '../../../shared/exporter';
import {
  signUpForm,
  signUpValidationSchema,
} from '../../../shared/utils/validations';
import {svgIcon} from '../../../assets/svg';

interface SignUpProps {
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  let isValidForm = true;
  const formikRef = useRef(null);

  const handleSignUp = (values: any) => {
    console.log('Values => ', values);
    navigation.navigate(Routes.OTPVerification, {email: values.email});
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
    </MainWrapper>
  );
};

export default SignUp;
