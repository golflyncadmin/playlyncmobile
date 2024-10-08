import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AppHeader, MainWrapper} from '../../../../components';
import styles from './styles';
import {
  TERMS,
  Routes,
  TERMS_DESC,
  TABLE_OF_CONTENT,
} from '../../../../shared/exporter';

interface TermsAndConditionsProps {
  route: any;
  navigation: any;
}

const TermsAndConditions = ({route, navigation}: TermsAndConditionsProps) => {
  const {isProfile} = route?.params;

  return (
    <MainWrapper style={styles.container}>
      <AppHeader
        title={'Terms & Conditions'}
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
        <Text style={styles.headingTextStyle}>
          AGREEMENT TO OUR LEGAL TERMS
        </Text>
        <Text style={styles.descTextStyle}>{TERMS_DESC}</Text>
        <Text style={styles.titleTextStyle}>TABLE OF CONTENTS</Text>
        <Text style={styles.headingsTextStyle}>{TABLE_OF_CONTENT}</Text>
        {TERMS?.map((item: any) => (
          <View key={item?.id}>
            <Text style={styles.titleTextStyle}>{item?.title}</Text>
            <Text style={styles.descTextStyle}>{item?.desc}</Text>
          </View>
        ))}
      </ScrollView>
    </MainWrapper>
  );
};

export default TermsAndConditions;
