import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../../components';
import RequestsStack from '../Stacks/RequestsStack';
import AddRequestStack from '../Stacks/AddRequestStack';
import AlertsStack from '../Stacks/AlertsStack';
import ProfileStack from '../Stacks/ProfileStack';

const Tab = createBottomTabNavigator();
const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="RequestsStack"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        options={{unmountOnBlur: true}}
        component={RequestsStack}
        name={'RequestsStack'}
      />
      <Tab.Screen
        options={{unmountOnBlur: true}}
        component={AddRequestStack}
        name={'AddRequestStack'}
      />
      <Tab.Screen
        options={{unmountOnBlur: true}}
        component={AlertsStack}
        name={'AlertsStack'}
      />
      <Tab.Screen
        options={{unmountOnBlur: true}}
        component={ProfileStack}
        name={'ProfileStack'}
      />
    </Tab.Navigator>
  );
};

export {AppStack};
