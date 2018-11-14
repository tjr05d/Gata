import React from 'react';
import { AsyncStorage, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from '../aws-exports';

import KeyboardDismissView from './KeyboardDismissView';
import styles from './LoginStyles'; 

Amplify.configure(aws_exports);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'User Confirmation',
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code: "",
      errorMsg: ""
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
    }).catch(err => {
      console.log(err)
      this.setState({ errorMsg: err.message });
    }); 
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardDismissView style={styles.container}>
          <FormLabel> USERNAME </FormLabel>
          <FormInput
            containerStyle={styles.input}
            onChangeText={(username) => this.setState({ username })}
          />
          <FormLabel> CONFIRMATION CODE </FormLabel>
          <FormInput
            containerStyle={styles.input}
            onChangeText={(code) => this.setState({ code })}
          />

          {errorMsg && <FormValidationMessage> {errorMsg} </FormValidationMessage>}

          <View style={styles.buttons}>
            <Button
              raised
              buttonStyle={styles.signInButton}
              title="CONFIRM"
              onPress={this._confirmAsync}
            />
          </View>
        </KeyboardDismissView>
      </View>
    )
  }
}