import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppColor from '../constants/AppColor';

class BottomTabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 1,
    };
  }

  render() {
    return (
      <View
        style={{
          paddingBottom: 10,
          //   height: 50,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          backgroundColor:
            this.state.tabSelected == 2
              ? AppColor.HomeBackgroundColor
              : this.state.tabSelected == 3
              ? 'powderblue'
              : 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({tabSelected: 1}, () => {
              this.props.navigation.navigate('Home');
            });
          }}>
          <View
            style={{
              backgroundColor:
                this.state.tabSelected == 2
                  ? AppColor.HomeBackgroundColor
                  : this.state.tabSelected == 1
                  ? AppColor.HomeBackgroundColor
                  : AppColor.transparent,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 50,
              borderRadius: 25,
            }}>
            <Text
              style={{
                fontSize: 10,
                color:
                  this.state.tabSelected == 2
                    ? 'white'
                    : this.state.tabSelected == 1
                    ? 'white'
                    : 'blue',
              }}>
              1
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setState({tabSelected: 2}, () => {});
            this.props.navigation.navigate('List');
          }}>
          <View
            style={{
              backgroundColor:
                this.state.tabSelected == 2
                  ? AppColor.white
                  : AppColor.transparent,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 50,
              borderRadius: 25,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: AppColor.HomeBackgroundColor,
              }}>
              2
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({tabSelected: 3}, () => {
              this.props.navigation.navigate('Profile');
            });
          }}>
          <View
            style={{
              backgroundColor:
                this.state.tabSelected == 2
                  ? AppColor.HomeBackgroundColor
                  : this.state.tabSelected == 3
                  ? AppColor.HomeBackgroundColor
                  : AppColor.transparent,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 50,
              borderRadius: 25,
            }}>
            <Text
              style={{
                fontSize: 10,
                color:
                  this.state.tabSelected == 2
                    ? 'white'
                    : this.state.tabSelected == 3
                    ? 'white'
                    : 'blue',
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BottomTabBarComponent;
