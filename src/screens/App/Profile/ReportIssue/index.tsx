import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  reportIssueForm,
  reportIssueSchema,
} from '../../../../shared/utils/validations';
import {
  AppButton,
  AppHeader,
  AppInput,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {isIOS} from '../../../../shared/exporter';

interface ReportIssueProps {
  navigation: any;
}

const ReportIssue = ({navigation}: ReportIssueProps) => {
  const formikRef = useRef(null);

  const handleReportIssue = (values: any) => {
    console.log('Values => ', values);
    navigation.goBack();
  };

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title={'Report an issue'} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={reportIssueForm}
          validationSchema={reportIssueSchema}
          onSubmit={(values: any) => handleReportIssue(values)}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.headingTextStyle}>Email</Text>
                <AppInput
                  placeholder="Enter your email"
                  value={values.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  errorMessage={errors.email}
                  inputStyle={styles.inputStyle}
                  onChangeText={handleChange('email')}
                />
                <Text style={styles.headingTextStyle}>Subject</Text>
                <AppInput
                  placeholder="Enter Subject"
                  value={values.subject}
                  autoCapitalize="none"
                  touched={touched.subject}
                  inputStyle={styles.inputStyle}
                  errorMessage={errors.subject}
                  onChangeText={handleChange('subject')}
                />
                <View style={styles.spacerView} />
                <AppInput
                  placeholder="Please let us know what questions you may have, we are happy to help!"
                  value={values.description}
                  autoCapitalize="none"
                  textAlignVertical="top"
                  multiline={true}
                  touched={touched.description}
                  errorMessage={errors.description}
                  inputStyle={styles.descInputStyle}
                  inputContainerStyle={styles.inputContainerStyle}
                  onChangeText={handleChange('description')}
                />
                <Text style={styles.limitTextStyle}>1,000 Character Limit</Text>
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
                    title={'Submit'}
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

export default ReportIssue;
