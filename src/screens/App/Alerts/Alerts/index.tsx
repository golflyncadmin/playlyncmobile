import React, {useState, useEffect} from 'react';
import {View, Text, Image, Linking, FlatList} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {AppButton, AppLoader, MainWrapper} from '../../../../components';
import {useGetRequestAlertsQuery} from '../../../../redux/app/appApiSlice';
import styles from './styles';
import {appIcons} from '../../../../shared/exporter';
import {svgIcon} from '../../../../assets/svg';

interface AlertsProps {
  navigation: any;
}

const Alerts = ({navigation}: AlertsProps) => {
  const isFocused = useIsFocused();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const {
    data: alertsData,
    isLoading: alertsLoading,
    refetch: alertsRefetch,
  } = useGetRequestAlertsQuery(undefined);

  useEffect(() => {
    if (isFocused) alertsRefetch();
  }, [isFocused]);

  const toggleSeeAll = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const DisplayInfo = ({icon, info}: {icon: React.ReactNode; info: string}) => (
    <View style={styles.rowContainer}>
      {icon}
      <Text style={styles.infoTextStyle}>{info}</Text>
    </View>
  );

  const NoAlertView = () => (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={appIcons.appLogo}
          style={styles.logoStyle}
        />
      </View>
      <View style={styles.contentContainer}>
        <DisplayInfo
          icon={svgIcon.SendIcon}
          info="Make game requests to receive notifications based on your game criteria."
        />
        <DisplayInfo
          icon={svgIcon.NotifyIcon}
          info="Get notified when your game requests become available for you to book!"
        />
        <DisplayInfo
          icon={svgIcon.ConfirmCircleIcon}
          info="Book directly without any added fees!"
        />
        <AppButton
          title={'Add a Game'}
          handleClick={() => navigation.navigate('AddRequestStack')}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );

  const handleOpenURL = async (url: string) => {
    await Linking.openURL(url);
  };

  const renderItem = ({item, index}: any) => {
    const isExpanded = expandedIndex === index;

    const teaTimes = item?.tee_times;
    const allTeaTimes = [
      ...teaTimes?.morning_tee_times,
      ...teaTimes?.afternoon_tee_times,
      ...teaTimes?.evening_tee_times,
    ];

    const times: any = [];

    if (teaTimes?.morning_tee_times?.length) times.push('Morning');

    if (teaTimes?.afternoon_tee_times?.length) times.push('Afternoon');

    if (teaTimes?.evening_tee_times?.length) times.push('Evening');

    const timeSlots = isExpanded ? allTeaTimes : allTeaTimes.slice(0, 3);

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemRowContainer}>
          <Text style={styles.titleStyle}>{item?.course_name}</Text>
          <Text style={styles.infoStyle}>{item?.course_date}</Text>
        </View>
        <View style={styles.itemRowContainer}>
          <Text style={styles.timeTextStyle}>Available Tee Times</Text>
          <Text style={styles.timeSlotStyle}>{times?.join(', ')}</Text>
        </View>
        {timeSlots?.map((slot, idx) => (
          <Text key={idx} style={styles.timeTextStyle}>
            #{idx + 1} - {slot?.course_date} {slot?.start_time} | Max Players:{' '}
            {slot?.max_players}
          </Text>
        ))}
        <AppButton
          isEmpty={false}
          title={`See ${isExpanded ? 'less' : 'all'} Tee Times`}
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.smallButtonStyle}
          handleClick={() => toggleSeeAll(index)}
        />
        <AppButton
          title={'Book Now'}
          handleClick={() => handleOpenURL('https://www.golfnow.com/')}
          // handleClick={() => handleOpenURL(item?.booking_url)}
        />
      </View>
    );
  };

  return (
    <MainWrapper style={styles.container}>
      {alertsData?.data?.length > 0 && (
        <View style={styles.dataContainer}>
          <View style={styles.headerContainer}>
            {svgIcon.NotificationsIcon}
            <Text style={styles.alertTextStyle}>Alerts</Text>
          </View>
          <FlatList
            data={alertsData?.data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flContainer}
            keyExtractor={item => item?.id?.toString()}
          />
        </View>
      )}
      {alertsData?.data?.length === 0 && <NoAlertView />}
      {alertsLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default Alerts;
