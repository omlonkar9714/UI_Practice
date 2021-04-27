import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChapterList from '../screens/ChapterList';
import StackNavigator from './StackNavigator';
import BottomTabBarComponent from '../components/BottomTabBarComponent';

import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBar={props => (
        <BottomTabBarComponent {...props}></BottomTabBarComponent>
      )}>
      <Tabs.Screen name="Home" component={StackNavigator}></Tabs.Screen>
      <Tabs.Screen name="List" component={ChapterList}></Tabs.Screen>
      <Tabs.Screen name="Profile" component={Profile}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
