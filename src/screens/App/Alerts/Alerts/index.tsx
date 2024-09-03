import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, ListRenderItemInfo} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {AppButton, AppLoader, MainWrapper} from '../../../../components';
import {useGetRequestAlertsQuery} from '../../../../redux/app/appApiSlice';
import styles from './styles';
import {appIcons} from '../../../../shared/exporter';
import {svgIcon} from '../../../../assets/svg';

interface AlertsProps {
  navigation: any;
}

type Alert = {
  id: number;
  title: string;
};


const ALL_TIME_SLOTS = [1, 2, 3, 4, 5, 6, 7];

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

  const renderItem = ({item, index}: ListRenderItemInfo<Alert>) => {
    const isExpanded = expandedIndex === index;
    const timeSlots = isExpanded ? ALL_TIME_SLOTS : ALL_TIME_SLOTS.slice(0, 3);

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemRowContainer}>
          <Text style={styles.titleStyle}>{item?.facility_name}</Text>
          <Text style={styles.infoStyle}>{item?.facility_date}</Text>
        </View>
        <View style={styles.itemRowContainer}>
          <Text style={styles.timeTextStyle}>Available Tee Times</Text>
          <Text style={styles.infoStyle}>{item?.start_time}</Text>
        </View>
        {timeSlots.map((slot, idx) => (
          <Text key={idx} style={styles.timeTextStyle}>
            #1 - {item?.facility_date} {item?.start_time} | Max Players: {item?.players}
          </Text>
        ))}
        <AppButton
          isEmpty={false}
          title={`See ${isExpanded ? 'less' : 'all'} Tee Times`}
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.smallButtonStyle}
          handleClick={() => toggleSeeAll(index)}
        />
        <AppButton title={'Book Now'} handleClick={() => {}} />
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
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
      {alertsData?.data?.length === 0 && <NoAlertView />}
      {alertsLoading && <AppLoader />}
    </MainWrapper>
  );
};

export default Alerts;
