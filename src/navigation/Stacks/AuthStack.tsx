import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginType from '@authScreens/LoginType';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import OTPVerification from '@authScreens/OTPVerification';

type AuthStackParamList = {
  LoginType: undefined;
  Login: undefined;
  SignUp: undefined;
  OTPVerification: OTPVerification;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'LoginType'} component={LoginType} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'OTPVerification'} component={OTPVerification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
