import React, {useRef, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  personalInfoForm,
  personalInfoSchema,
} from '../../../../shared/utils/validations';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppLoader,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {
  isIOS,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../../shared/exporter';
import {
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
} from '../../../../redux/app/appApiSlice';

interface PersonalInfoProps {
  navigation: any;
}

const PersonalInfo = ({navigation}: PersonalInfoProps) => {
  const formikRef: any = useRef(null);
  const isFocused = useIsFocused();
  const [userProfile, setUserProfile] = useState<any>('');
  const {loginUser} = useSelector((state: object | any) => state?.auth);

  const [fetchRequests, {isLoading: fetchLoading}] =
    useLazyGetProfileQuery(undefined);

  const [updateProfile, {isLoading: updateLoading}] =
    useUpdateProfileMutation();

  useEffect(() => {
    (async () => {
      if (isFocused) {
        const res = await fetchRequests(loginUser?.id);
        const data = res?.data?.data;
        formikRef?.current?.setFieldValue('firstName', data?.first_name);
        formikRef?.current?.setFieldValue('lastName', data?.last_name);
        setUserProfile(data);
      }
    })();
  }, [isFocused]);

  const handleUpdateInfo = async (values: any, {resetForm}) => {
    try {
      const data = {
        first_name: values?.firstName,
        last_name: values?.lastName,
      };
      const resp = await updateProfile({id: loginUser?.id, data});
      if (resp?.data) {
        showAlert('Profile Updated', resp?.data?.message, () => {
          navigation.goBack();
          resetForm();
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
      <AppHeader title={'Personal Data'} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={personalInfoForm}
          validationSchema={personalInfoSchema}
          onSubmit={handleUpdateInfo}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.headingTextStyle}>Email</Text>
                <Text style={styles.valueTextStyle}>{userProfile?.email}</Text>
                {/* <Text style={styles.headingTextStyle}>Phone Number</Text>
                <Text style={styles.valueTextStyle}>
                  +{userProfile?.phone_number}
                </Text> */}
                <Text style={styles.headingTextStyle}>First name</Text>
                <AppInput
                  placeholder="First name"
                  value={values.firstName}
                  touched={touched.firstName}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  errorMessage={errors.firstName}
                  onChangeText={handleChange('firstName')}
                />
                <Text style={styles.headingTextStyle}>Last name</Text>
                <AppInput
                  placeholder="Last name"
                  value={values.lastName}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  touched={touched.lastName}
                  errorMessage={errors.lastName}
                  onChangeText={handleChange('lastName')}
                />
              </View>
              <View style={styles.bottomView}>
                <View style={styles.separatorView} />
                <View style={styles.buttonsRow}>
                  <AppButton
                    title={'Cancel'}
                    isEmpty={false}
                    textStyle={styles.cancelTextStyle}
                    handleClick={() => navigation.goBack()}
                    buttonStyle={styles.cancelButtonStyle}
                  />
                  <AppButton
                    title={'Update'}
                    isEmpty={false}
                    handleClick={handleSubmit}
                    textStyle={styles.actionTextStyle}
                    buttonStyle={styles.actionButtonStyle}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      {(fetchLoading || updateLoading) && <AppLoader />}
    </MainWrapper>
  );
};

export default PersonalInfo;
