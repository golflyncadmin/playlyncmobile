import React from 'react';
import {Text} from 'react-native';
import {MainWrapper} from '../../../components';

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <MainWrapper>
      <Text>Home Screen</Text>
    </MainWrapper>
  );
};

export default Home;
