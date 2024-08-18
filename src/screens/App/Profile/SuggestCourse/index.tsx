import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  suggestCourseForm,
  suggestCourseSchema,
} from '../../../../shared/utils/validations';
import {
  AppButton,
  AppHeader,
  AppInput,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {isIOS} from '../../../../shared/exporter';

interface SuggestCourseProps {
  navigation: any;
}

const SuggestCourse = ({navigation}: SuggestCourseProps) => {
  const formikRef = useRef(null);

  const handleSuggestCourse = (values: any) => {
    console.log('Values => ', values);
    navigation.goBack();
  };

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title={'Suggest a Course'} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={suggestCourseForm}
          validationSchema={suggestCourseSchema}
          onSubmit={(values: any) => handleSuggestCourse(values)}>
          {({values, errors, touched, isValid, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.helpTextStyle}>
                  Help us expand our coverage!
                </Text>
                <Text style={styles.descTextStyle}>
                  We strive to provide the most comprehensive list of golf
                  courses for you. But we recognize that there may still be some
                  hidden gems we've missed. That's where you come in. Do you
                  frequent a golf course that's not listed in our app? Let's
                  change that!
                </Text>
                <Text style={styles.headingTextStyle}>Course name</Text>
                <AppInput
                  placeholder="Enter course name"
                  value={values.courseName}
                  touched={touched.courseName}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  errorMessage={errors.courseName}
                  onChangeText={handleChange('courseName')}
                />
                <Text style={styles.headingTextStyle}>
                  Course location (city, state)
                </Text>
                <AppInput
                  placeholder="Enter course location"
                  value={values.courseLocation}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  touched={touched.courseLocation}
                  errorMessage={errors.courseLocation}
                  onChangeText={handleChange('courseLocation')}
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
                    title={'Suggest course'}
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

export default SuggestCourse;
