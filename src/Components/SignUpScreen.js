import React from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Amplify, { Auth } from 'aws-amplify';
import KeyboardDismissView from './KeyboardDismissView'; 
import styles from './LoginStyles'; 
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone_number: "",
      errorMsg: null
    }
  }
  
  _signUpAsync = async () => {
    const { username, password, email, phone_number } = this.state
    Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
      },
      validationData: []  //optional
    })
      .then(data => {
        console.log(data)
        this.props.navigation.navigate('UserConfirm'); 
      })
      .catch(err => {
        console.log(err)
        this.setState({ errorMsg: err.message });
      });
  }

  _navigateToSignIn = () => {
    this.props.navigation.navigate('SignIn')
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
          <FormLabel> EMAIL </FormLabel>
          <FormInput
            containerStyle={styles.input}
            onChangeText={(email) => this.setState({ email })}
          />
          <FormLabel> PHONE </FormLabel>
          <FormInput
            containerStyle={styles.input}
            onChangeText={(phone) => this.setState({ phone })}
          />

          {errorMsg && <FormValidationMessage> {errorMsg} </FormValidationMessage>}

          <View style={styles.buttons}>
            <Button
              raised
              buttonStyle={styles.signInButton}
              title="SIGN UP"
              onPress={this._signUpAsync}
            />
            <Button
              raised
              buttonStyle={styles.signUpButton}
              textStyle={styles.signUpButtonText}
              title="SIGN IN"
              onPress={this._navigateToSignIn}
            />
          </View>
        </KeyboardDismissView>
      </View>
    )
  }
}