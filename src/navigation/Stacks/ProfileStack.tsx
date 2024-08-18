import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '@appScreens/Profile/Profile';
import PolicyAndTerms from '@appScreens/Profile/PolicyAndTerms';
import PersonalInfo from '@appScreens/Profile/PersonalInfo';
import SuggestCourse from '@appScreens/Profile/SuggestCourse';
import ReportIssue from '@appScreens/Profile/ReportIssue';

type ProfileStackParamList = {
  Profile: undefined;
  PolicyAndTerms: undefined;
  PersonalInfo: undefined;
  SuggestCourse: undefined;
  ReportIssue: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'PolicyAndTerms'} component={PolicyAndTerms} />
      <Stack.Screen name={'PersonalInfo'} component={PersonalInfo} />
      <Stack.Screen name={'SuggestCourse'} component={SuggestCourse} />
      <Stack.Screen name={'ReportIssue'} component={ReportIssue} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
