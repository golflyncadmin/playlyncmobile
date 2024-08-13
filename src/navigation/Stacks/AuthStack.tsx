import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@authScreens/Login';

type AuthStackParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
