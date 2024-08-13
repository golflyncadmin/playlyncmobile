import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../../components';
import styles from './styles';

interface AlertsProps {
  navigation: any;
}

const Alerts = ({navigation}: AlertsProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>Alerts</Text>
    </MainWrapper>
  );
};

export default Alerts;
