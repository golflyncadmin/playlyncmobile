import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './Stacks/AuthStack';
import IntroStack from './Stacks/IntroStack';
import AppStack from './BottomTabs';
import Splash from '@authScreens/Splash';
import PrivacyPolicy from '@appScreens/Profile/PrivacyPolicy';
import TermsAndConditions from '@appScreens/Profile/TermsAndConditions';
import PersonalInfo from '@appScreens/Profile/PersonalInfo';
import SuggestCourse from '@appScreens/Profile/SuggestCourse';
import ReportIssue from '@appScreens/Profile/ReportIssue';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="IntroStack" component={IntroStack} />

        {/* General */}
        <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
        <Stack.Screen
          name={'TermsAndConditions'}
          component={TermsAndConditions}
        />
        <Stack.Screen name={'PersonalInfo'} component={PersonalInfo} />
        <Stack.Screen name={'SuggestCourse'} component={SuggestCourse} />
        <Stack.Screen name={'ReportIssue'} component={ReportIssue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
