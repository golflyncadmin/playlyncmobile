import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  personalInfoForm,
  personalInfoSchema,
} from '../../../../shared/utils/validations';
import {
  AppButton,
  AppHeader,
  AppInput,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {isIOS} from '../../../../shared/exporter';

interface PersonalInfoProps {
  navigation: any;
}

const PersonalInfo = ({navigation}: PersonalInfoProps) => {
  const formikRef = useRef(null);

  const handleUpdateInfo = (values: any) => {
    console.log('Values => ', values);
    navigation.goBack();
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
          onSubmit={(values: any) => handleUpdateInfo(values)}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.headingTextStyle}>Email</Text>
                <Text style={styles.emailTextStyle}>janegolf@gmail.com</Text>
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
    </MainWrapper>
  );
};

export default PersonalInfo;
