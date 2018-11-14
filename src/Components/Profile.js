import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: <Icon size={25} style={{ color: 'white' }} name="user-female" />
  }
 
  render() {
    return (
      <View>
        <Text> Profile Placeholder </Text>
      </View>
    );
  }
}
