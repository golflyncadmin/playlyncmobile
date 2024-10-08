import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AppHeader, MainWrapper} from '../../../../components';
import styles from './styles';
import {
  Routes,
  POLICY,
  PRIVACY_DESC,
  PRIVACY_INFO,
} from '../../../../shared/exporter';

interface PrivacyPolicyProps {
  route: any;
  navigation: any;
}

const PrivacyPolicy = ({route, navigation}: PrivacyPolicyProps) => {
  const {isProfile} = route?.params;

  return (
    <MainWrapper style={styles.container}>
      <AppHeader
        title={'Privacy Policy'}
        onPressBack={() => {
          if (isProfile) {
            navigation.goBack();
          } else {
            navigation.navigate(Routes.LoginType, {showModal: true});
          }
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}>
        <Text style={styles.descTextStyle}>{PRIVACY_DESC}</Text>
        <Text style={styles.headingTextStyle}>{PRIVACY_INFO}</Text>
        {POLICY?.map((item: any) => (
          <View key={item.id}>
            <Text style={styles.titleTextStyle}>{item?.title}</Text>
            <Text style={styles.descTextStyle}>{item?.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </MainWrapper>
  );
};

export default PrivacyPolicy;
