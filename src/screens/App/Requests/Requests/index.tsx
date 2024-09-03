import React, {useRef, useState, useEffect} from 'react';
import {Text, View, FlatList, ListRenderItemInfo} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {
  AppButton,
  AppHeader,
  AppLoader,
  DeleteModal,
  MainWrapper,
  PreviousReqSheet,
} from '../../../../components';
import styles from './styles';
import {
  useGetRequestsQuery,
  useDeleteRequestMutation,
} from '../../../../redux/app/appApiSlice';
import {svgIcon} from '../../../../assets/svg';
import {
  Routes,
  showAlert,
  MY_REQUESTS,
  GENERIC_ERROR_TEXT,
} from '../../../../shared/exporter';

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
  const sheetRef = useRef(null);
  const isFocused = useIsFocused();
  const [reqId, setReqId] = useState('');
  const [allRequests, setAllRequests] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const {
    data: requestsData,
    isLoading: reqLoading,
    refetch: requestsRefetch,
  } = useGetRequestsQuery(undefined);

  const [deleteRequest, {isLoading: delLoading}] = useDeleteRequestMutation();

  useEffect(() => {
    if (isFocused) requestsRefetch();
  }, [isFocused]);

  useEffect(() => {
    if (requestsData) {
      console.log('Req Data => ', requestsData);
      return;
      const n = CREATED_REQUESTS.length;
      const mergedRequests: any = [...MY_REQUESTS];
      for (let i = 0; i < n; i++) {
        mergedRequests[i] = CREATED_REQUESTS[i];
      }
      setAllRequests(mergedRequests);
    }
  }, [requestsData]);

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
                handleClick={() => {
                  setReqId(item?.id);
                  setModalVisible(true);
                }}
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

  const handleDeleteRequest = async () => {
    try {
      const resp = await deleteRequest(reqId);
      if (resp?.data) {
        console.log('Del RES => ', resp);
        setReqId('');
        setModalVisible(false);
        requestsRefetch();
      } else {
        showAlert('Error', resp?.error?.data?.message);
      }
    } catch (error: any) {
      showAlert('Error', GENERIC_ERROR_TEXT);
    }
  };

  return (
    <MainWrapper style={styles.container}>
      <AppHeader title="Game Requests" leftIcon={false} rightIcon={true} />
      <View style={styles.spacerView} />
      {/* <Text
        suppressHighlighting
        onPress={() => sheetRef.current.open()}
        style={styles.previousRequestsStyle}>
        Previous requests
      </Text> */}
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
      {allRequests?.length === 0 && (
        <View style={styles.noDataContainer}>
          <Text style={styles.noRecordTextStyle}>
            {reqLoading ? '' : 'No Requests Found'}
          </Text>
        </View>
      )}
      <DeleteModal
        modalVisible={modalVisible}
        handleClick={() => handleDeleteRequest()}
        setModalVisible={() => setModalVisible(false)}
        heading="Are you sure you want to delete this request?"
      />

      {(reqLoading || delLoading) && <AppLoader />}
      {/* <PreviousReqSheet ref={sheetRef} data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} /> */}
    </MainWrapper>
  );
};

export default Requests;
