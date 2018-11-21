import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { AsyncStorage } from '@aws-amplify/core';
import { Auth } from 'aws-amplify';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: <Icon size={25} style={{ color: 'white' }} name="user-female" />
  }

  signOutAsync = async ({ navigation }) => {
    await AsyncStorage.clear();
    Auth.signOut()
      .then((data) => {
        console.log(data);
        navigation.navigate('Auth');
      })
      .catch(err => console.log(err));
  }

  checkSession = async () => {
    Auth.currentSession()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
        <List containerStyle={styles.listContainer}>
          <ListItem
            key="Sign Out"
            title="Sign Out"
            leftIcon={<Icon size={25} style={styles.icon} name="logout" />}
            titleContainerStyle={styles.titleContainer}
            onPress={this.signOutAsync}
          />
          <ListItem
            key="Session Details"
            title="Session Details"
            leftIcon={<Icon size={25} style={styles.icon} name="info" />}
            titleContainerStyle={styles.titleContainer}
            onPress={this.checkSession}
          />
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    listContainer: {
      marginTop: 100,
    },
    icon: {
      color: '#527FFF',
    },
    titleContainer: {
      marginLeft: 20,
    }
  }
)