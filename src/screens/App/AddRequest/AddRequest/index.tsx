import React, {useRef, useState, useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {
  AppInput,
  Dropdown,
  AppButton,
  AppHeader,
  AppLoader,
  MainWrapper,
  DateRangePicker,
} from '../../../../components';
import {useCreateRequestMutation} from '../../../../redux/app/appApiSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  addRequestForm,
  addRequestSchema,
} from '../../../../shared/utils/validations';
import styles from './styles';
import {svgIcon} from '../../../../assets/svg';
import {
  WP,
  isIOS,
  Routes,
  GLColors,
  showAlert,
  GENERIC_ERROR_TEXT,
} from '../../../../shared/exporter';
import {LOCATIONS_DATA, TIME_ORDER} from '../../../../shared/utils/constant';

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
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [playersCount, setPlayersCount] = useState<number>(1);
  const [selectedTimes, setSelectedTimes] = useState<any>([]);

  const [createRequest, {isLoading}] = useCreateRequestMutation();

  const handleCheckBoxChange = (label: any) => {
    if (selectedTimes.includes(label)) {
      // Remove from selected times if already selected
      setSelectedTimes((prev: any) =>
        prev.filter((time: any) => time !== label),
      );
    } else {
      // Add to selected times if not selected
      setSelectedTimes((prev: any) => [...prev, label]);
    }
  };

  const handleAddRequest = async (values: any) => {
    if (location === '') return showAlert('Error', 'Please select Location');
    if (playersCount <= 0)
      return showAlert('Error', 'Please select number of players');
    if (selectedTimes?.length === 0)
      return showAlert('Error', 'Please select time');

    const orderedTime = selectedTimes.sort(
      (a: any, b: any) => TIME_ORDER.indexOf(a) - TIME_ORDER.indexOf(b),
    );

    try {
      const data = {
        start_date: startDate,
        end_date: endDate,
        time: orderedTime,
        location: location,
        players: playersCount,
      };
      const resp = await createRequest(data);
      if (resp?.data) {
        showAlert('Request Submitted', resp?.data?.message, () => {
          navigation.navigate(Routes.RequestsStack);
          setPlayersCount(1);
          setEndDate('');
          setStartDate('');
          setSelectedTimes([]);
          formikRef?.current?.setFieldValue('dateRange', '');
        });
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const incrementPlayers = () =>
    setPlayersCount(prevCount => (prevCount < 4 ? prevCount + 1 : 4));
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
    setEndDate(range?.endDate);
    setStartDate(range?.startDate);

    const formattedDate = formatDateRange(range);
    formikRef.current?.setFieldValue('dateRange', formattedDate);
  };

  const onChange = (item: any) => {
    setLocation(item?.label);
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
                <Dropdown
                  onChange={onChange}
                  placeholder="Pick Location"
                  locationsArr={LOCATIONS_DATA}
                />
                <Text style={[styles.headingTextStyle, {marginTop: WP('6')}]}>
                  Number of players *
                </Text>
                <View style={styles.countContainer}>
                  <TouchableOpacity
                    onPress={decrementPlayers}
                    disabled={playersCount === 0}
                    style={styles.countButtonStyle}>
                    <Text style={styles.countButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.countTextStyle}>{playersCount}</Text>
                  <TouchableOpacity
                    onPress={incrementPlayers}
                    disabled={playersCount === 4}
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
                        value={selectedTimes.includes(option.label)}
                        style={styles.checkboxStyle}
                        onValueChange={() => handleCheckBoxChange(option.label)}
                        tintColor={
                          selectedTimes.includes(option.label)
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
      {isLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default AddRequest;
