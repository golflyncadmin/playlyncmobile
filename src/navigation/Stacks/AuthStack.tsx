import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@authScreens/Login';
import {Routes} from '../../shared/exporter';
import AppIntro from '@authScreens/AppIntro';
import {AppStack} from '../BottomTabs';
import {useSelector} from 'react-redux';

type AuthStackParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  const isWalkthrough = useSelector(state => state?.auth?.isWalkthrough);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isWalkthrough && (
        <Stack.Screen name={Routes.AppIntro} component={AppIntro} />
      )}
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={'AppStack'} component={AppStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
