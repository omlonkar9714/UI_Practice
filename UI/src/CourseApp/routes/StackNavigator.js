import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CourseHome from '../screens/CourseHome';
import ChapterList from '../screens/ChapterList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={CourseHome}></Stack.Screen>
      <Stack.Screen name="List" component={ChapterList}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default StackNavigator;
