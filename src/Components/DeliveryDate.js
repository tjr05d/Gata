import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { format } from 'date-fns';

const DeliveryDate = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.deliveryDate}>
        <Icon size={15} style={styles.truckIcon} name="truck" />
        { format(date, '[  Next Delivery: ] ddd, MMM D') }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#2C2B3C',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.5,
    },
    deliveryDate: {
      color: 'white'
    },
    truckIcon: {
      color: 'white',
    }
  }
);
export default DeliveryDate;
