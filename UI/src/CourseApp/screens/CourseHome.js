import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppColor from '../constants/AppColor';

class CourseHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: AppColor.white}}>
        <Text> CourseHome </Text>
      </View>
    );
  }
}

export default CourseHome;
