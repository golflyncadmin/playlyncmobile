import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginType from '@authScreens/LoginType';
import Login from '@authScreens/Login';
import SignUp from '@authScreens/SignUp';

type AuthStackParamList = {
  LoginType: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LoginType'} component={LoginType} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
