import React, {useRef, useState, useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {
  AppInput,
  AppButton,
  AppHeader,
  MainWrapper,
  DateRangePicker,
} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  addRequestForm,
  addRequestSchema,
} from '../../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../../assets/svg';
import {GLColors, WP, isIOS} from '../../../../shared/exporter';

interface AddRequestProps {
  navigation: any;
}

interface Option {
  id: number;
  label: string;
}

const options: Option[] = [
  {id: 1, label: 'Morning'},
  {id: 2, label: 'Afternoon'},
  {id: 3, label: 'Evening'},
];

const AddRequest: React.FC<AddRequestProps> = ({navigation}) => {
  const formikRef = useRef<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [playersCount, setPlayersCount] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCheckBoxChange = (id: number) =>
    setSelectedId(prevId => (prevId === id ? null : id));

  const handleAddRequest = (values: any) => {
    if (playersCount <= 0) return alert('Please select number of players');
    if (selectedId === null) return alert('Please select time');
    console.log('Values => ', values);
    console.log('Player => ', playersCount);
    console.log('Time => ', selectedId);
  };

  const incrementPlayers = () => setPlayersCount(prevCount => prevCount + 1);
  const decrementPlayers = () =>
    setPlayersCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));

  const formatDateRange = useCallback(
    ({startDate, endDate}: {startDate?: string; endDate?: string}) => {
      if (!startDate || !endDate) return '';

      const start = new Date(startDate);
      const end = new Date(endDate);

      const dayOptions: Intl.DateTimeFormatOptions = {day: 'numeric'};
      const monthYearOptions: Intl.DateTimeFormatOptions = {
        month: 'long',
        year: 'numeric',
      };

      const startDay = start.toLocaleDateString('en-GB', dayOptions);
      const endDay = end.toLocaleDateString('en-GB', dayOptions);

      // Format month and year from the end date
      const monthYear = end.toLocaleDateString('en-GB', monthYearOptions);

      return `${startDay}-${endDay} ${monthYear}`;
    },
    [],
  );

  const handleSelectRange = (range: {startDate: string; endDate: string}) => {
    const formattedDate = formatDateRange(range);
    formikRef.current?.setFieldValue('dateRange', formattedDate);
  };

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title="Game Request" leftIcon={false} />
      <View style={styles.spacerView} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          styles.scrollViewStyle,
          !isIOS() && styles.heightStyle,
        ]}
        showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={addRequestForm}
          validationSchema={addRequestSchema}
          onSubmit={handleAddRequest}>
          {({values, errors, touched, handleSubmit, handleChange}) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.headingTextStyle}>Location*</Text>
                <AppInput
                  placeholder="Enter Location"
                  value={values.location}
                  touched={touched.location}
                  autoCapitalize="none"
                  inputStyle={styles.inputStyle}
                  errorMessage={errors.location}
                  onChangeText={handleChange('location')}
                />
                <Text style={[styles.headingTextStyle, {marginTop: WP('6')}]}>
                  Number of players *
                </Text>
                <View style={styles.countContainer}>
                  <TouchableOpacity
                    onPress={decrementPlayers}
                    style={styles.countButtonStyle}>
                    <Text style={styles.countButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countTextStyle}>{playersCount}</Text>
                  <TouchableOpacity
                    onPress={incrementPlayers}
                    style={styles.countButtonStyle}>
                    <Text style={styles.countButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.headingTextStyle}>Date Range *</Text>
                <AppInput
                  placeholder="Pick date range"
                  value={values.dateRange}
                  touched={touched.dateRange}
                  autoCapitalize="none"
                  errorMessage={errors.dateRange}
                  inputStyle={styles.dateInputStyle}
                  rightIcon={true}
                  editable={false}
                  icon={svgIcon.CalendarGrayIcon}
                  onChangeText={handleChange('dateRange')}
                  rightIconPress={() => setModalVisible(true)}
                />
                <DateRangePicker
                  modalVisible={modalVisible}
                  handleClick={handleSelectRange}
                  setModalVisible={() => setModalVisible(false)}
                />
                <Text style={[styles.headingTextStyle, {marginTop: WP('6')}]}>
                  Time *
                </Text>
                <View style={styles.checkboxContainer}>
                  {options.map(option => (
                    <View key={option.id} style={styles.checkboxContainer}>
                      <CheckBox
                        boxType="square"
                        value={selectedId === option.id}
                        style={styles.checkboxStyle}
                        onValueChange={() => handleCheckBoxChange(option.id)}
                        tintColor={
                          selectedId === option.id
                            ? GLColors.Blue.B2
                            : GLColors.Natural.N4
                        }
                        tintColors={{
                          true: GLColors.Blue.B2,
                          false: GLColors.Natural.N4,
                        }}
                      />
                      <Text style={styles.labelStyle}>{option.label}</Text>
                    </View>
                  ))}
                </View>
                <View style={styles.bottomView}>
                  <AppButton
                    title="Submit Request"
                    handleClick={handleSubmit}
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

export default AddRequest;
