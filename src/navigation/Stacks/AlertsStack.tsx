import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Alerts from '@appScreens/Alerts/Alerts';

type AlertsStackParamList = {
  Alerts: undefined;
};

const Stack = createNativeStackNavigator<AlertsStackParamList>();

const AlertsStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Alerts'} component={Alerts} />
    </Stack.Navigator>
  );
};

export default AlertsStack;
