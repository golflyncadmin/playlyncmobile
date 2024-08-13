import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Requests from '@appScreens/Requests/Requests';

type RequestsStackParamList = {
  Requests: undefined;
};

const Stack = createNativeStackNavigator<RequestsStackParamList>();

const RequestsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Requests'} component={Requests} />
    </Stack.Navigator>
  );
};

export default RequestsStack;
