import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../components';
import styles from './styles';

interface LoginProps {
  navigation: any;
}

const Login = ({navigation}: LoginProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>Login</Text>
    </MainWrapper>
  );
};

export default Login;
