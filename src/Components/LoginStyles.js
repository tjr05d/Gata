import { StyleSheet } from 'react-native'; 

const LoginStyles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50
    },
    buttons: {
      marginTop: 30,
      alignItems: 'center'
    },
    input: {
      margin: 10, 
      width: 300
    },
    signInButton: {
      justifyContent: 'center',
      backgroundColor: '#527FFF',
      width: 200
    },
    signUpButton: {
      backgroundColor: 'transparent',
      marginTop: 30
    },
    signUpButtonText: {
      color: '#527FFF'
    }
  }
); 

export default LoginStyles; 