import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '@appScreens/Profile/Profile';

type ProfileStackParamList = {
  Profile: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Profile'} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
