import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class HeaderRight extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.getParam('increaseCount') }
        style={{ margin: 10 }}
      >
        <Icon name="plus" size={30} color='#fff' />
      </TouchableHighlight> 
    )
  }
}