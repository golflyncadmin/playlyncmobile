import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {AppButton, AppInput, MainWrapper} from '../../../components';
import styles from './styles';
import {Routes, appIcons} from '../../../shared/exporter';
import {
  resetPassForm,
  resetPassSchema,
} from '../../../shared/utils/validations';
import {svgIcon} from '../../../assets/svg';

interface ResetPasswordProps {
  route: any;
  navigation: any;
}

const ResetPassword = ({navigation, route}: ResetPasswordProps) => {
  let isValidForm = true;
  const {email} = route?.params;
  const formikRef = useRef(null);

  const handleResetPassword = (values: any) => {
    console.log('Values => ', values);
    navigation.replace(Routes.Login);
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
    </MainWrapper>
  );
};

export default ResetPassword;
