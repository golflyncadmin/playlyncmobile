import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../components';
import styles from './styles';

interface LoginScreenProps {
  navigation: any;
  route: {
    params: {
      role: string;
    };
  };
}

const LoginScreen = ({navigation, route}: LoginScreenProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>Login Screen</Text>
    </MainWrapper>
  );
};

export default LoginScreen;
