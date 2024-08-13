import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddRequest from '@appScreens/AddRequest/AddRequest';

type AddRequestStackParamList = {
  AddRequest: undefined;
};

const Stack = createNativeStackNavigator<AddRequestStackParamList>();

const AddRequestStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'AddRequest'} component={AddRequest} />
    </Stack.Navigator>
  );
};

export default AddRequestStack;
