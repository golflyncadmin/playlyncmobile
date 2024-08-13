import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppIntro from '@appIntroScreens';

type AppIntroStackParamList = {
  AppIntro: undefined;
};

const Stack = createNativeStackNavigator<AppIntroStackParamList>();

const AppIntroStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'AppIntro'} component={AppIntro} />
    </Stack.Navigator>
  );
};

export default AppIntroStack;
