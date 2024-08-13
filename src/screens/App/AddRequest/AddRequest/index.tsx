import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../../components';
import styles from './styles';

interface AddRequestProps {
  navigation: any;
}

const AddRequest = ({navigation}: AddRequestProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>Add Request</Text>
    </MainWrapper>
  );
};

export default AddRequest;
