import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { AsyncStorage } from '@aws-amplify/core';
import { Auth } from 'aws-amplify';
import { subDays } from 'date-fns';

import PeriodWindow from './PeriodWindow';
import DeliveryDate from './DeliveryDate';
import UserBox from './UserBox';

const placeHolderImg = require('../../assets/images/placeholder.png');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: <Icon size={25} style={{ color: 'white' }} name="home" />
  }

  state = {
    expectedPeriodDate: new Date(),
    expectedDeliveryDate: subDays(new Date(), 10),
    boxProducts: [ 
      { title: 'Tampon', img: null, detail: 'Organic and High Quality', quantity: 5, price: '$1.00' },
      { title: 'Maxi Pad', img: null, detail: 'Organic and High Quality', quantity: 2, price: '$2.50' },
      { title: 'Advil', img: null, detail: 'Ibuprofin', quantity: 2, price: '$5.00' },
      { title: 'Heating Pad', img: null, detail: 'Soothes aches and cramps', quantity: 5, price: 'Free'}
    ],
  };

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
    const { navigation } = this.props;
    const { expectedPeriodDate, expectedDeliveryDate, boxProducts } = this.state;

    return (
      <View style={styles.contentContainer}>
        <PeriodWindow expectedPeriodDate={expectedPeriodDate} />
        <DeliveryDate date={expectedDeliveryDate} />
        <UserBox navigation={navigation} boxProducts={boxProducts} />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    contentContainer: {
      flex: 1
    }
  }
);
