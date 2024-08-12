import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../../components';
import CreatorHomeStack from '../CreatorHomeStack';
import ProfileStack from '../ProfileStack';
import TouristHome from '@screens/App/TouristHome';
import {USER_MODE} from '../../shared/exporter';
import {useSelector} from 'react-redux';
import WishlistScreen from '@screens/App/WishlistScreen';
import Notification from '@screens/App/Notification';
import AllTourReviews from '@screens/App/AllTourReviews';

const Tab = createBottomTabNavigator();
const AppStack = () => {
  const user = useSelector(state => state?.auth?.loginUser);
  const {role} = user || '';

  return (
    <Tab.Navigator
      initialRouteName="CreatorHomeStack"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      {role === USER_MODE.CREATOR ? (
        <Tab.Screen
          options={{unmountOnBlur: true}}
          component={CreatorHomeStack}
          name={'CreatorHomeStack'}
        />
      ) : (
        <Tab.Screen
          options={{unmountOnBlur: true}}
          component={TouristHome}
          name={'TouristHome'}
        />
      )}

      {role === USER_MODE.CREATOR ? (
        <Tab.Screen
          options={{unmountOnBlur: true}}
          component={AllTourReviews}
          name={'AllTourReviews'}
        />
      ) : (
        <Tab.Screen
          options={{unmountOnBlur: true}}
          component={WishlistScreen}
          name={'WishlistScreen'}
        />
      )}

      <Tab.Screen
        options={{unmountOnBlur: true}}
        component={Notification}
        name={'Notification'}
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
