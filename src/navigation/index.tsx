import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import AuthStack from './Stacks/AuthStack';
import IntroStack from './Stacks/IntroStack';
import AppStack from './BottomTabs';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AppNavigation = ({}) => {
  const {accessToken, isWalkthrough} = useSelector(
    (state: object | any) => state?.auth,
  );

  const handleNavigation = () => {
    setTimeout(() => {
      BootSplash.hide();
    }, 2000);
  };

  return (
    <NavigationContainer onReady={() => handleNavigation()}>
      <Stack.Navigator
        initialRouteName={accessToken ? 'AppStack' : 'AuthStack'}
        screenOptions={{headerShown: false}}>
        {accessToken ? (
          <Stack.Screen name={'AppStack'} component={AppStack} />
        ) : isWalkthrough ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="IntroStack" component={IntroStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
