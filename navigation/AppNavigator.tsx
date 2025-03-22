import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobFinderScreen from '../screens/JobFinderScreen';
import SavedJobsScreen from '../screens/SavedJobsScreen';
import ApplicationForm from '../screens/ApplicationForm';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="JobFinder" component={JobFinderScreen} options={{ title: 'Job Finder' }} />
    <Stack.Screen name="SavedJobs" component={SavedJobsScreen} options={{ title: 'Saved Jobs' }} />
    <Stack.Screen name="ApplicationForm" component={ApplicationForm} options={{ title: 'Application Form' }} />
  </Stack.Navigator>
);

export default AppNavigator;