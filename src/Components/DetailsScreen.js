import React from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#CE93D8'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    tabBarIcon: <Icon size={25} style={{ color: 'white' }} name="layers"> </Icon>
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Details Screen </Text>
        <Text> itemId: {JSON.stringify(itemId)} </Text>
        <Text> otherParam: {JSON.stringify(otherParam)} </Text>
        <Button
          title="Go to Details..."
          onPress={() => this.props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100)
          })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    ); 
  }
}