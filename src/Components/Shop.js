import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Shop extends React.Component {
  static navigationOptions = {
    title: "Shop",
    tabBarIcon: <Icon size={25} style={{ color: 'white' }} name="bag" />
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Shopping Placeholder </Text>
      </View>
    );
  }
}
