import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../../components';
import RequestsStack from '../RequestStack';
import AddRequestStack from '../AddRequestStack';
import AlertsStack from '../AlertsStack';
import ProfileStack from '../ProfileStack';

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
