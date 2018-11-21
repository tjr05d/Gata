import React from 'react';
import { StyleSheet, View } from 'react-native';
import { addDays, subDays } from 'date-fns';

import PeriodWindowDate from './PeriodWindowDate';

const PeriodWindow = ({ expectedPeriodDate }) => {
  const windowDates = [
    subDays(expectedPeriodDate, 2),
    subDays(expectedPeriodDate, 1),
    expectedPeriodDate,
    addDays(expectedPeriodDate, 1),
    addDays(expectedPeriodDate, 2)
  ];

  return (
    <View style={styles.container}>
      { windowDates.map((date, i) => <PeriodWindowDate date={date} position={i} key={i} />) }
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#527FFF',
      flex: 1.25,
      flexDirection: 'row',
      paddingTop: 40,
    }
  }
);

export default PeriodWindow;
