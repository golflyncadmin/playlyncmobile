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

interface RequestsProps {
  navigation: any;
}

const Requests = ({navigation}: RequestsProps) => {
  const sheetRef = useRef(null);
  const isFocused = useIsFocused();
  const [reqId, setReqId] = useState('');
  const [allRequests, setAllRequests] = useState(MY_REQUESTS);
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
    if (requestsData?.data) {
      const {data} = requestsData;
      const n = data?.length;
      const mergedRequests: any = [...MY_REQUESTS];
      for (let i = 0; i < n; i++) {
        mergedRequests[i] = data[i];
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

  const formatDates = (start: any, end: any) => {
    const startObj = new Date(start);
    const endObj = new Date(end);

    const startMonth = String(startObj.getMonth() + 1).padStart(2, '0');
    const startDay = String(startObj.getDate()).padStart(2, '0');
    const endDay = String(endObj.getDate()).padStart(2, '0');
    const year = startObj.getFullYear();

    return `${startMonth}/${startDay}-${endDay}/${year}`;
  };

  const renderItem = ({item, index}: any) => {
    const isCreated = item?.hasOwnProperty('location');
    const dateRange = formatDates(item?.start_date, item?.end_date);
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
              {isCreated ? item?.players : '0'}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          {isCreated ? (
            <View>
              <DisplayInfo icon={svgIcon.LocationIcon} label={item?.location} />
              <DisplayInfo icon={svgIcon.DateIcon} label={dateRange} />
              <DisplayInfo
                icon={svgIcon.TimeIcon}
                label={item?.time?.join(', ')}
              />
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
