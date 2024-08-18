import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '@appScreens/Profile/Profile';
import PolicyAndTerms from '@appScreens/Profile/PolicyAndTerms';

type ProfileStackParamList = {
  Profile: undefined;
  PolicyAndTerms: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'PolicyAndTerms'} component={PolicyAndTerms} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
