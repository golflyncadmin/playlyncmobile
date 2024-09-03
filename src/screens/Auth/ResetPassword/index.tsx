import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {AppButton, AppInput, AppLoader, MainWrapper} from '../../../components';
import {
  GENERIC_ERROR_TEXT,
  Routes,
  appIcons,
  showAlert,
} from '../../../shared/exporter';
import {useResetPasswordMutation} from '../../../redux/auth/authApiSlice';
import {
  resetPassForm,
  resetPassSchema,
} from '../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../assets/svg';

interface ResetPasswordProps {
  route: any;
  navigation: any;
}

const ResetPassword = ({navigation, route}: ResetPasswordProps) => {
  let isValidForm = true;
  const formikRef = useRef(null);
  const {email, phone} = route?.params;
  const [resetPassword, {isLoading}] = useResetPasswordMutation();

  const handleResetPassword = async (values: any) => {
    try {
      const data = email
        ? {
            email: email,
            password: values?.password,
          }
        : {
            phone_number: phone,
            password: values?.password,
          };

      const resp = await resetPassword(data);
      if (resp?.data) {
        navigation.replace(Routes.Login);
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
          initialValues={resetPassForm}
          validationSchema={resetPassSchema}
          onSubmit={(values: any) => handleResetPassword(values)}>
          {({values, errors, touched, isValid, handleSubmit, handleChange}) => {
            if (isValidForm) {
              isValid = false;
              isValidForm = false;
            }
            return (
              <View style={styles.contentContainer}>
                <Text style={styles.headingStyle}>Set New Password</Text>
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
                <AppButton
                  title={'Continue'}
                  disabled={!isValid}
                  handleClick={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default ResetPassword;
