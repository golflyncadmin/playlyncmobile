import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {AppButton, AppInput, MainWrapper} from '../../../components';
import styles from './styles';
import {Routes, appIcons} from '../../../shared/exporter';
import {
  forgotPassForm,
  forgotPassValidationSchema,
} from '../../../shared/utils/validations';
import {svgIcon} from '../../../assets/svg';

interface ForgotPasswordProps {
  navigation: any;
}

const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  let isValidForm = true;
  const formikRef = useRef(null);

  const handleForgotPassword = (values: any) => {
    console.log('Values => ', values);
    navigation.replace(Routes.OTPVerification, {
      email: values.email,
      reset: true,
    });
  };

  return (
    <MainWrapper style={styles.container}>
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
          initialValues={forgotPassForm}
          validationSchema={forgotPassValidationSchema}
          onSubmit={(values: any) => handleForgotPassword(values)}>
          {({values, errors, touched, isValid, handleSubmit, handleChange}) => {
            if (isValidForm) {
              isValid = false;
              isValidForm = false;
            }
            return (
              <View style={styles.contentContainer}>
                <Text style={styles.headingStyle}>Forgot Password</Text>
                <AppInput
                  placeholder="Email*"
                  // placeholder="Email or Phone Number*"
                  value={values.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  leftIcon={svgIcon.MailIcon}
                  errorMessage={errors.email}
                  onChangeText={handleChange('email')}
                />
                <AppButton
                  title={'Send'}
                  disabled={!isValid}
                  handleClick={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                />
              </View>
            );
          }}
        </Formik>
      </View>
    </MainWrapper>
  );
};

export default ForgotPassword;
