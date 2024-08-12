import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './authStack';
import {AppStack} from './BottomTabs';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AppNavigation = ({}) => {
  const token = useSelector(state => state?.auth?.accessToken);

  const checkNavigation = () => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  };

  return (
    <NavigationContainer onReady={() => checkNavigation()}>
      <Stack.Navigator
        initialRouteName={token ? 'AppStack' : 'AuthStack'}
        screenOptions={{headerShown: false}}>
        {token ? (
          <Stack.Screen name={'AppStack'} component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
