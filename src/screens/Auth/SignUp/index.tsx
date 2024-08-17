import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../components';
import styles from './styles';

interface SignUpProps {
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>SignUp</Text>
    </MainWrapper>
  );
};

export default SignUp;
