import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import AppColor from '../constants/AppColor';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Lessons from '../model/CourseCahpter';

const COLORS = [];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: 1,
      currentChapterTitle: 'The basics of HTML and CSS',
      chapterListData: Lessons,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  renderHeader = () => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <EvilIcons name="chevron-left" size={40} color="white"></EvilIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="chart" size={40} color="white"></EvilIcons>
        </TouchableOpacity>
      </View>
    );
  };

  renderChapterHeader = () => {
    return (
      <View
        style={{marginHorizontal: 30, flexDirection: 'column', marginTop: 30}}>
        <Text style={{fontSize: 15, color: AppColor.ccc}}>
          CHAPTER {this.state.currentChapter}
        </Text>
        <Text
          style={{
            lineHeight: 50,
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 37,
            color: AppColor.white,
          }}>
          {this.state.currentChapterTitle}
        </Text>
      </View>
    );
  };

  renderLessonsList = () => {
    return (
      <FlatList
        horizontal
        data={this.state.chapterListData}
        keyExtractor={item => item.img + Math.random()}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              borderRadius: 20,
              width: (Dimensions.get('window').width * 75) / 100,
              marginBottom: 60,
              marginHorizontal: 30,
              marginLeft: index == 0 ? 30 : 0,
              marginTop: 40,
              overflow: 'hidden',
            }}>
            <Image
              style={{height: '60%', width: '100%', resizeMode: 'cover'}}
              source={{uri: item.img}}></Image>
            <View
              style={{
                flex: 1,
                backgroundColor: item.color,
              }}>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: item.fontColor,
                  fontSize: 25,
                  marginHorizontal: 20,
                }}>
                {item.title}
              </Text>
              <View style={{flex: 1}}>
                <Text
                  numberOfLines={5}
                  style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    fontWeight: 'bold',
                    color: item.fontColor == 'black' ? AppColor.ccc : 'white',
                    fontSize: 15,
                  }}>
                  {item.info}
                </Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.5}>
              <View
                style={{
                  // left: (Dimensions.get('window').width * 75) / 100 / 4,
                  backgroundColor: AppColor.orangeButton,
                  color: 'white',
                  fontSize: 20,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  // borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    alignSelf: 'center',
                  }}>
                  Start Lesson
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}></FlatList>
    );
  };

  renderBorderFooter = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          marginBottom: 30,
          backgroundColor: AppColor.ccc,
        }}></View>
    );
  };

  renderFooter = () => {
    return (
      <View style={{marginVertical: 30, marginHorizontal: 30}}>
        {this.renderBorderFooter()}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: AppColor.ccc, fontSize: 15}}>
            10 ways to take better lecture notes.
          </Text>
          <TouchableOpacity>
            <Text style={{color: AppColor.poederblue, fontSize: 15}}>MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{backgroundColor: 'powderblue', flex: 1}}>
        {this.renderHeader()}
        {this.renderChapterHeader()}
        {this.renderLessonsList()}
        {this.renderFooter()}
      </View>
    );
  }
}

export default Profile;
