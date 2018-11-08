import React from 'react';
import { AsyncStorage, Button, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'User Confirmation',
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code: ""
    }
  }
  
  _confirmAsync = async () => {
    const username = this.state.username;
    const code = this.state.code; 
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, code, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
      console.log(data)
      AsyncStorage.setItem('userToken', 'abc')
      this.props.navigation.navigate('App'); 
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>

        <TextInput
          style={{ height: 40 }}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Confirmation Code"
          onChangeText={(code) => this.setState({ code })}
        />
        <Button title="Confirm" onPress={this._confirmAsync} />
      </View>
    )
  }
}