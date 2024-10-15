import React, {useRef, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  reportIssueForm,
  reportIssueSchema,
} from '../../../../shared/utils/validations';
import {
  AppInput,
  AppButton,
  AppHeader,
  AppLoader,
  MainWrapper,
  AdminResponseModal,
} from '../../../../components';
import styles from './styles';
import {
  isIOS,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../../shared/exporter';
import {useReportIssueMutation} from '../../../../redux/app/appApiSlice';
import {useSelector} from 'react-redux';

interface ReportIssueProps {
  route: any;
  navigation: any;
}

const ReportIssue = ({route, navigation}: ReportIssueProps) => {
  const formikRef: any = useRef(null);
  const [adminMessage, setAdminMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {loginUser} = useSelector((state: object | any) => state?.auth);

  const [reportIssue, {isLoading}] = useReportIssueMutation();

  useEffect(() => {
    if (loginUser) {
      formikRef?.current?.setFieldValue('email', loginUser?.email);
    }
  }, [loginUser]);

  useEffect(() => {
    if (route?.params?.message) {
      const {body} = route?.params?.message;
      setAdminMessage(body);
      setTimeout(() => {
        setModalVisible(true);
      }, 500);
    }
  }, [route]);

  const handleReportIssue = async (values: any, {resetForm}) => {
    try {
      const data = {
        email: values?.email,
        subject: values?.subject,
        body: values?.description,
      };
      const resp = await reportIssue(data);
      if (resp?.data) {
        showAlert('Report Issue', resp?.data?.message, () => {
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
          onSubmit={handleReportIssue}>
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
      {isLoading && <AppLoader />}
      <AdminResponseModal
        message={adminMessage}
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(false)}
      />
    </MainWrapper>
  );
};

export default ReportIssue;
