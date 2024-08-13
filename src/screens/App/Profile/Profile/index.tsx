import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../../components';
import styles from './styles';

interface ProfileProps {
  navigation: any;
}

const Profile = ({navigation}: ProfileProps) => {
  return (
    <MainWrapper style={styles.container}>
      <Text style={styles.desText}>Profile</Text>
    </MainWrapper>
  );
};

export default Profile;
