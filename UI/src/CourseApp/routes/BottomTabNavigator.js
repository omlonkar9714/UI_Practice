import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChapterList from '../screens/ChapterList';
import CourseHome from '../screens/CourseHome';

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="List" component={ChapterList}></Tabs.Screen>
      <Tabs.Screen name="Home" component={CourseHome}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
