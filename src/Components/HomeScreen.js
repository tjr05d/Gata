import React from 'react';
import { Button, ScrollView, Text, TouchableHighlight } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import LogoTitle from './LogoTitle'; 
import { AsyncStorage } from '@aws-amplify/core';
import { Auth } from 'aws-amplify';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    tabBarIcon: <Icon size={25} style={{color: 'white'}} name="home" />
  }

  state = {
    count: 0,
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }


  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 }); 
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    Auth.signOut()
      .then(data => {
        console.log(data)
        this.props.navigation.navigate('Auth'); 
      })
      .catch(err => console.log(err));

  }

  _checkSession = async () => {
    Auth.currentSession()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    const params = { itemId: 86, otherParam: 'anything that I want' }
    const count = this.state.count;

    return (
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}> Home Screen or whatever {this.state.count} </Text>
        <Button
          title="Go to details"
          onPress={()=> this.props.navigation.navigate('Details', params)}
        />
        <Button
          title="Sign Out"
          onPress={this._signOutAsync}
        />
        <Button
          title="Session Details"
          onPress={this._checkSession}
        />
      </ScrollView>    
    );
  }
}