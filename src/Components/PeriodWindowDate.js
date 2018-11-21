import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

const PeriodWindowDate = ({ date, position }) => {
  const bgColor = [
    '#90ADFF',
    '#7196FF',
    '#527FFF',
    '#7196FF',
    '#90ADFF'
  ];
  return (
    <View style={[styles.container, { backgroundColor: bgColor[position] }]}>
      <Text style={styles.month}>
        { format(date, 'MMM') }
      </Text>
      <Text style={styles.date}>
        {format(date, 'D')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      alignItems: 'center',
      backgroundColor: '#527FFF',
      flex: 1,
      justifyContent: 'center',
    },
    date: {
      color: 'white',
      fontSize: 20
    },
    month: {
      color: 'white',
    }

  }
);
export default PeriodWindowDate;
