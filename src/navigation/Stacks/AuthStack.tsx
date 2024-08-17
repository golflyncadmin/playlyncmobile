import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginType from '@authScreens/LoginType';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';
import OTPVerification from '@authScreens/OTPVerification';
import ForgotPassword from '@authScreens/ForgotPassword';

type AuthStackParamList = {
  LoginType: LoginType;
  Login: Login;
  SignUp: SignUp;
  OTPVerification: OTPVerification;
  ForgotPassword: OTPVerification;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginType'} component={LoginType} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'OTPVerification'} component={OTPVerification} />
      <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
