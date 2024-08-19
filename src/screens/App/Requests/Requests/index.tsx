import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, ListRenderItemInfo} from 'react-native';
import {
  AppButton,
  AppHeader,
  DeleteModal,
  MainWrapper,
} from '../../../../components';
import styles from './styles';
import {svgIcon} from '../../../../assets/svg';
import {MY_REQUESTS, Routes} from '../../../../shared/exporter';

type CreatedRequests = {
  id: number;
  location: string;
  day: string;
  date: string;
  time: string;
};

type Alert = {
  id: number;
  title: string;
};

const CREATED_REQUESTS: CreatedRequests[] = [
  {
    id: 1,
    location: 'Riverside Golf Course',
    day: 'Monday, Saturday',
    date: '5/18-24/2024',
    time: 'Evening',
  },
  {
    id: 2,
    location: 'Riverside Golf Course',
    day: 'Monday, Saturday',
    date: '5/18-24/2024',
    time: 'Evening',
  },
];

interface RequestsProps {
  navigation: any;
}

const Requests = ({navigation}: RequestsProps) => {
  const [allRequests, setAllRequests] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const n = CREATED_REQUESTS.length;
    const mergedRequests: any = [...MY_REQUESTS];
    for (let i = 0; i < n; i++) {
      mergedRequests[i] = CREATED_REQUESTS[i];
    }
    setAllRequests(mergedRequests);
  }, []);

  const DisplayInfo = ({icon, label}) => (
    <View style={styles.innerRow}>
      {icon}
      <Text style={styles.infoTextStyle}>{label}</Text>
    </View>
  );

  const renderItem = ({item, index}: ListRenderItemInfo<Alert>) => {
    const isCreated = item?.hasOwnProperty('location');
    return (
      <View
        key={item?.id}
        style={[
          styles.itemContainer,
          isCreated ? styles.reqItemContainer : {},
        ]}>
        <View
          style={[
            styles.memberContainer,
            isCreated ? styles.activeMemberContainer : {},
          ]}>
          <View style={styles.iconContainer}>
            {isCreated ? svgIcon.MemberWhiteIcon : svgIcon.MemberIcon}
            <Text
              style={[
                styles.memberCountStyle,
                isCreated ? styles.activeMemberCountStyle : {},
              ]}>
              {isCreated ? '3' : '0'}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          {isCreated ? (
            <View>
              <DisplayInfo
                icon={svgIcon.LocationIcon}
                label="Riverside Golf Course"
              />
              <DisplayInfo
                icon={svgIcon.CalendarIcon}
                label="Monday, Saturday"
              />
              <DisplayInfo icon={svgIcon.DateIcon} label="5/18-24/2024" />
              <DisplayInfo icon={svgIcon.TimeIcon} label="Evening" />
              <AppButton
                title={'Delete Request'}
                textStyle={styles.textStyle}
                buttonStyle={styles.buttonStyle}
                handleClick={() => setModalVisible(true)}
              />
            </View>
          ) : (
            <Text
              suppressHighlighting
              style={styles.addRequestStyle}
              onPress={() => navigation.navigate(Routes.AddRequestStack)}>
              {item?.title}
            </Text>
          )}
        </View>
      </View>
    );
  };

  const deleteRequest = () => {
    setModalVisible(false);
  };

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title="Game Requests" leftIcon={false} rightIcon={true} />
      <View style={styles.spacerView} />
      <Text
        suppressHighlighting
        onPress={() => {}}
        style={styles.previousRequestsStyle}>
        Previous requests
      </Text>
      {allRequests?.length > 0 && (
        <FlatList
          data={allRequests}
          extraData={allRequests}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flContainer}
          keyExtractor={item => item.id.toString()}
        />
      )}
      {/* {allRequests?.length === 0 && (
        <View style={styles.noDataContainer}>
          <Text style={styles.noRecordTextStyle}>No Requests Found</Text>
        </View>
      )} */}
      <DeleteModal
        modalVisible={modalVisible}
        handleClick={() => deleteRequest()}
        setModalVisible={() => setModalVisible(false)}
        heading="Are your sure you want to delete this request?"
      />
    </MainWrapper>
  );
};

export default Requests;
