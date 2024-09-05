import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {AppHeader, MainWrapper} from '../../../../components';
import styles from './styles';
import {Routes} from '../../../../shared/exporter';

interface PolicyAndTermsProps {
  route: any;
  navigation: any;
}

const PolicyAndTerms = ({route, navigation}: PolicyAndTermsProps) => {
  const {privacy} = route?.params;

  return (
    <MainWrapper style={styles.container}>
      <AppHeader
        title={privacy ? 'Privacy Policy' : 'Terms & Conditions'}
        onPressBack={() =>
          navigation.navigate(Routes.LoginType, {showModal: true})
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.descTextStyle, styles.generalDescStyle]}>
          Aliquam euismod sodales enim, eget gravida justo vestibulum ac. In
          semper nunc nisl, vitae sodales tortor pellentesque a. Vivamus sit
          amet leo hendrerit, faucibus turpis accumsan, consequat ante.
        </Text>
        {['AUTHORITY', 'PURPOSE', 'ROUTINE USES'].map(item => (
          <View>
            <Text style={styles.headingTextStyle}>{item}</Text>
            <Text style={styles.descTextStyle}>
              Fusce iaculis porttitor tristique. Pellentesque convallis egestas
              magna ut tempor. Nunc efficitur est eu odio interdum, non
              elementum enim facilisis. Cras tortor enim, volutpat eu efficitur
              sit amet, eleifend id quam. Praesent in velit et ligula mattis
              ornare. Aliquam vehicula turpis egestas nulla auctor, et efficitur
              erat elementum. Suspendisse sollicitudin, elit sed rutrum aliquam,
              neque purus tempor ligula, et auctor sapien diam vel ipsum. Sed
              viverra massa non tellus venenatis gravida. Vestibulum suscipit
              posuere risus, ac luctus enim vestibulum vitae. Nam non purus sit
              amet ex malesuada pulvinar eget ac urna. Suspendisse potenti.
              Quisque non facilisis ex.
            </Text>
          </View>
        ))}
      </ScrollView>
    </MainWrapper>
  );
};

export default PolicyAndTerms;
