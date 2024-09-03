import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, MainWrapper} from '../../../components';
import {Routes, appIcons, isIOS} from '../../../shared/exporter';
import {setAccessToken, setLoginUser} from '../../../redux/auth/authSlice';
import {
  userDetailsForm,
  userDetailsValidationSchema,
} from '../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../assets/svg';

interface UserDetailsProps {
  navigation: any;
}

const UserDetails = ({navigation}: UserDetailsProps) => {
  let isValidForm = true;
  const dispatch = useDispatch();
  const formikRef = useRef(null);

  const handleUserDetails = (values: any) => {
    console.log('Values => ', values);
    navigation.navigate(Routes.OTPVerification, {
      email: values.email || 'abc@gmail.com',
      phone: '1234567890',
    });
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
            initialValues={userDetailsForm}
            validationSchema={userDetailsValidationSchema}
            onSubmit={(values: any) => handleUserDetails(values)}>
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
                  <Text style={styles.headingStyle}>Add Details</Text>

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

export default UserDetails;
