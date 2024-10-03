import React, {useRef, useState, useCallback} from 'react';
import {Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {
  AppInput,
  AppButton,
  AppHeader,
  AppLoader,
  MainWrapper,
  CoursesModal,
  DateRangePicker,
} from '../../../../components';
import {
  useCreateRequestMutation,
  useSearchLocationsMutation,
  useLocationsCoursesMutation,
} from '../../../../redux/app/appApiSlice';
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
import {TIME_ORDER, TIME_OPTIONS} from '../../../../shared/utils/constant';
import {debounce} from '../../../../shared/utils/helpers';

interface AddRequestProps {
  navigation: any;
}

const AddRequest: React.FC<AddRequestProps> = ({navigation}) => {
  const DEBOUNCE_DELAY = 500;
  const formikRef = useRef<any>(null);
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [courses, setCourses] = useState<any[]>([]);
  const [selCourseId, setSelCourseId] = useState('');
  const [locations, setLocations] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [playersCount, setPlayersCount] = useState<number>(1);
  const [selectedTimes, setSelectedTimes] = useState<any>([]);
  const [displayDropDown, setDisplayDropDown] = useState(false);
  const [locationCourses, setLocationCourses] = useState<any[]>([]);
  const [coursesModalVisible, setCoursesModalVisible] = useState(false);

  const [createRequest, {isLoading}] = useCreateRequestMutation();
  const [searchLocations, {isLoading: searchLoading}] =
    useSearchLocationsMutation();
  const [getLocationCourses, {isLoading: fetchLoading}] =
    useLocationsCoursesMutation();

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

  const handleAddRequest = async (values: any, {resetForm}) => {
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
        location: values?.location,
        course_id: selCourseId,
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
          resetForm();
        });
      } else {
        showAlert('Error', resp?.error?.data?.message || GENERIC_ERROR_TEXT);
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

  const handleSelectCourse = (course: any) => {
    const {course_id, course_name} = course;
    setSelCourseId(course_id);
    setDisplayDropDown(false);
    setCoursesModalVisible(false);
    formikRef?.current?.setFieldValue('location', course_name);
  };

  const handleSearch = async (query: string) => {
    if (!query) return;
    try {
      const data = {search: query};

      const resp = await searchLocations(data);
      if (resp?.data) {
        const data = resp?.data?.data;
        setCourses(data?.course_suggestions);
        setLocations(data?.location_suggestions);
      } else {
        console.log('Error => ', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  // Debounced version of handleSearch
  const debouncedHandleSearch = debounce(handleSearch, DEBOUNCE_DELAY);

  const handleGetCourses = async (location: string) => {
    try {
      const data = {location: location};

      const resp = await getLocationCourses(data);
      if (resp?.data) {
        const data = resp?.data?.data;
        setLocationCourses(data?.course_suggestions);
        setCoursesModalVisible(true);
      } else {
        console.log('Error => ', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  const renderItem = ({item}: any, type: string) => {
    const isCourses = type === 'courses';
    return (
      <TouchableOpacity
        key={item}
        activeOpacity={0.7}
        style={styles.itemContainer}
        onPress={() => {
          if (isCourses) {
            handleSelectCourse(item);
          } else {
            handleGetCourses(item);
          }
        }}>
        {svgIcon.LocationIcon}
        <Text style={styles.itemTextStyle}>
          {isCourses ? item?.course_name : item}
        </Text>
      </TouchableOpacity>
    );
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
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            setFieldValue,
          }) => (
            <View style={styles.contentContainer}>
              <View style={styles.innerView}>
                <Text style={styles.titleTextStyle}>Location*</Text>
                <AppInput
                  placeholder="Search Location"
                  value={values.location}
                  touched={touched.location}
                  autoCapitalize="none"
                  leftIcon={svgIcon.LocationIcon}
                  errorMessage={errors.location}
                  onChangeText={txt => {
                    debouncedHandleSearch(txt);
                    setFieldValue('location', txt);
                    setDisplayDropDown(txt ? true : false);
                  }}
                  inputStyle={styles.inputStyle}
                />
                <Text style={[styles.titleTextStyle, {marginTop: WP('6')}]}>
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
                <Text style={styles.titleTextStyle}>Date Range *</Text>
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
                <Text style={[styles.titleTextStyle, {marginTop: WP('6')}]}>
                  Time *
                </Text>
                <View style={styles.checkboxContainer}>
                  {TIME_OPTIONS.map(option => (
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
      {displayDropDown && (
        <View style={styles.locationsContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {courses?.length > 0 && (
              <>
                <Text style={styles.headingTextStyle}>Courses</Text>
                <View>
                  <FlatList
                    key="1"
                    data={courses}
                    scrollEnabled={false}
                    renderItem={item => renderItem(item, 'courses')}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item: any) => item?.toString()}
                  />
                </View>
              </>
            )}
            <Text style={[styles.headingTextStyle, {marginTop: WP('5')}]}>
              Locations
            </Text>
            {locations?.length > 0 ? (
              <View>
                <FlatList
                  key="2"
                  data={locations}
                  scrollEnabled={false}
                  renderItem={item => renderItem(item, 'locations')}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item: any) => item?.toString()}
                />
              </View>
            ) : (
              <View style={styles.emptyView}>
                <Text style={styles.emptyTextStyle}>
                  {!searchLoading &&
                    'No results found. Please try another search'}
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      )}
      <CoursesModal
        data={locationCourses}
        modalVisible={coursesModalVisible}
        handleClick={handleSelectCourse}
        setModalVisible={() => setCoursesModalVisible(false)}
      />
      {(isLoading || searchLoading || fetchLoading) && <AppLoader />}
    </MainWrapper>
  );
};

export default AddRequest;
