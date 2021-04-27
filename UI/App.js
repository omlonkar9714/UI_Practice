import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import CourseHome from './src/CourseApp/screens/CourseHome';
import ChapterList from './src/CourseApp/screens/ChapterList';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/CourseApp/routes/BottomTabNavigator';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <NavigationContainer>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
    // <CourseHome></CourseHome>
    // <ChapterList></ChapterList>
  );
};

export default App;
