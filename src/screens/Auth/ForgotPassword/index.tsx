import React, {useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {AppButton, AppInput, AppLoader, MainWrapper} from '../../../components';
import {
  Routes,
  appIcons,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../shared/exporter';
import {useForgotPasswordMutation} from '../../../redux/auth/authApiSlice';
import {
  forgotPassPhoneForm,
  forgotPassEmailForm,
  forgotPassPhoneSchema,
  forgotPassEmailSchema,
} from '../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../assets/svg';

interface ForgotPasswordProps {
  navigation: any;
}

const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  let isValidForm = true;
  const formikRef = useRef(null);
  const [isPhone, setIsPhone] = useState<boolean>(false);

  const [forgotPassword, {isLoading}] = useForgotPasswordMutation();

  const handleForgotPassword = async (values: any) => {
    try {
      const data = isPhone
        ? {
            phone_number: values?.phoneNumber,
          }
        : {
            email: values?.email,
          };

      const resp = await forgotPassword(data);
      if (resp?.data) {
        navigation.replace(Routes.OTPVerification, {
          phone: values.phoneNumber || '',
          email: values.email || '',
        });
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
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
          initialValues={isPhone ? forgotPassPhoneForm : forgotPassEmailForm}
          validationSchema={
            isPhone ? forgotPassPhoneSchema : forgotPassEmailSchema
          }
          onSubmit={(values: any) => handleForgotPassword(values)}>
          {({values, errors, touched, isValid, handleSubmit, handleChange}) => {
            if (isValidForm) {
              isValid = false;
              isValidForm = false;
            }
            return (
              <View style={styles.contentContainer}>
                <Text style={styles.headingStyle}>Forgot Password</Text>
                {isPhone ? (
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
                ) : (
                  <AppInput
                    placeholder="Email*"
                    value={values.email}
                    touched={touched.email}
                    autoCapitalize="none"
                    leftIcon={svgIcon.MailIcon}
                    errorMessage={errors.email}
                    onChangeText={handleChange('email')}
                  />
                )}
                <AppButton
                  title={'Send'}
                  disabled={!isValid}
                  handleClick={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                />
                <Text style={styles.otpChoiceStyle}>
                  Get OPT via{' '}
                  <Text
                    suppressHighlighting
                    onPress={() => {
                      formikRef?.current?.setFieldValue('email', '');
                      formikRef?.current?.setFieldValue('phoneNumber', '');
                      setIsPhone(!isPhone);
                    }}
                    style={styles.choiceStyle}>
                    {isPhone ? 'Email' : 'Phone'}
                  </Text>
                </Text>
              </View>
            );
          }}
        </Formik>
      </View>
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default ForgotPassword;
