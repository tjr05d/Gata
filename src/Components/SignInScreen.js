import React from 'react';
import { AsyncStorage, View } from 'react-native';
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import Amplify, { Auth } from 'aws-amplify';
import awsExports from '../aws-exports';

import KeyboardDismissView from './KeyboardDismissView'; 
import styles from './LoginStyles'; 

Amplify.configure(awsExports);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    };
  }

  _signInAsync = async () => {
    const { username, password } = this.state; 

    Auth.signIn(username, password)
      .then(() => {
        // const { navigation } = this.props;
        AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App'); 
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: err.message});
      });
  }

  _navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }

  render() {
    const errorMsg = this.state.errorMsg;

    return (
      <View style={styles.container}>
        <KeyboardDismissView style={styles.container}>
          <FormLabel> USERNAME </FormLabel>
          <FormInput

            containerStyle={styles.input}
            onChangeText={(username) => this.setState({ username })}
          />
          <FormLabel> PASSWORD </FormLabel>
          <FormInput  
            containerStyle={styles.input}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />

          { errorMsg && <FormValidationMessage> {errorMsg} </FormValidationMessage> }

          <View style={styles.buttons}>
            <Button 
              raised
              buttonStyle={styles.signInButton}
              title="SIGN IN" 
              onPress={this._signInAsync}
            />
            <Button
              raised
              buttonStyle={styles.signUpButton}
              textStyle={styles.signUpButtonText}
              title="SIGN UP"
              onPress={this._navigateToSignUp}
            />
          </View>
        </KeyboardDismissView>
      </View>
    )
  }
}