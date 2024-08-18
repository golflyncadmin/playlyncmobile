import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../../components';
import styles from './styles';

interface RequestsProps {
  navigation: any;
}

const Requests = ({navigation}: RequestsProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.todoTextStyle}>TODO: My Requests</Text>
    </MainWrapper>
  );
};

export default Requests;
