import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import CourseHome from './src/CourseApp/screens/CourseHome';
import ChapterList from './src/CourseApp/screens/ChapterList';

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <CourseHome></CourseHome>
    // <ChapterList></ChapterList>
  );
};

export default App;
