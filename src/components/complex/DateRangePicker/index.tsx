import React, {useState, useCallback} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import Modal from 'react-native-modal';
import {WP, GLColors, CALENDAR_THEME} from '../../../shared/exporter';
import {svgIcon} from '../../../assets/svg';
import {AppButton} from '../AppButton';
import {DAY_NAME_SHORT} from '../../../shared/utils/constant';

interface DateRangePickerProps {
  modalVisible: boolean;
  handleClick: (dates: {startDate: string; endDate: string}) => void;
  setModalVisible: () => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  handleClick,
  modalVisible,
  setModalVisible,
}) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState<{[key: string]: any}>({});

  LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort =
    DAY_NAME_SHORT;

  const handleDayPress = useCallback(
    (day: any) => {
      const dateString = day.dateString;

      if (!startDate || (startDate && endDate)) {
        setStartDate(dateString);
        setEndDate(null);
        setMarkedDates({
          [dateString]: {
            startingDay: true,
            color: GLColors.Blue.B2,
            textColor: GLColors.Natural.White,
          },
        });
      } else {
        if (new Date(dateString) <= new Date(startDate)) {
          Alert.alert('Error', 'End date must be greater than start date.');
        } else if (getDateDifference(startDate, dateString) > 29) {
          Alert.alert('Error', 'The date range cannot exceed 30 days.');
        } else {
          setEndDate(dateString);
          setMarkedDates(createRange(startDate, dateString));
        }
      }
    },
    [startDate, endDate],
  );

  const createRange = (start: string, end: string) => {
    let range: {[key: string]: any} = {};
    let startDate = new Date(start);
    let endDate = new Date(end);

    while (startDate <= endDate) {
      const date = startDate.toISOString().split('T')[0];
      range[date] = {
        color: GLColors.Natural.N20,
        textColor: GLColors.Natural.Black,
      };
      startDate.setDate(startDate.getDate() + 1);
    }

    range[start] = {
      startingDay: true,
      color: GLColors.Blue.B2,
      textColor: GLColors.Natural.White,
    };
    range[end] = {
      endingDay: true,
      color: GLColors.Blue.B2,
      textColor: GLColors.Natural.White,
    };

    return range;
  };

  const getDateDifference = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24),
    );
  };

  const handleSelectRange = () => {
    if (startDate && endDate) {
      handleClick({startDate, endDate});
      setModalVisible();
    } else {
      Alert.alert('Error', 'Both start and end dates must be selected.');
    }
  };

  const renderArrow = useCallback(
    (direction: 'left' | 'right') => (
      <View
        style={
          direction === 'left'
            ? styles.leftArrowContainer
            : styles.rightArrowContainer
        }>
        {direction === 'left' ? svgIcon.LeftBlueIcon : svgIcon.RightBlueIcon}
      </View>
    ),
    [],
  );

  return (
    <Modal
      useNativeDriver
      isVisible={modalVisible}
      onBackdropPress={setModalVisible}
      style={styles.modalContainer}>
      <CalendarList
        horizontal
        pagingEnabled
        hideArrows={false}
        markingType={'period'}
        theme={CALENDAR_THEME}
        renderArrow={renderArrow}
        markedDates={markedDates}
        showScrollIndicator={false}
        onDayPress={handleDayPress}
        minDate={new Date().toISOString().split('T')[0]}
      />
      <View style={styles.buttonsRow}>
        <AppButton
          title="No"
          isEmpty={false}
          textStyle={styles.noTextStyle}
          handleClick={setModalVisible}
          buttonStyle={styles.noButtonStyle}
        />
        <AppButton
          title="Select"
          isEmpty={false}
          handleClick={handleSelectRange}
          textStyle={styles.yesTextStyle}
          buttonStyle={styles.yesButtonStyle}
        />
      </View>
    </Modal>
  );
};

export {DateRangePicker};

const styles = StyleSheet.create({
  modalContainer: {
    bottom: 0,
    margin: 0,
    position: 'absolute',
    borderRadius: WP('3'),
    paddingVertical: WP('3'),
    backgroundColor: GLColors.Natural.White,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginBottom: WP('3'),
    paddingHorizontal: WP('2'),
    justifyContent: 'space-evenly',
  },
  noButtonStyle: {
    width: '42%',
    borderWidth: 1,
    height: WP('11'),
    borderColor: GLColors.Natural.N3,
    backgroundColor: GLColors.Natural.White,
  },
  yesButtonStyle: {
    width: '42%',
    borderWidth: 1,
    height: WP('11'),
  },
  noTextStyle: {
    width: '100%',
    textAlign: 'center',
    color: GLColors.Natural.Black,
  },
  yesTextStyle: {
    width: '100%',
    textAlign: 'center',
  },
  leftArrowContainer: {
    left: 0,
  },
  rightArrowContainer: {
    right: 0,
  },
});
