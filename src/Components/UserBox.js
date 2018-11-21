import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Card } from 'react-native-elements';

const placeHolderImg = require('../../assets/images/placeholder.png');

const UserBox = ({ boxProducts }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}> Your Box</Text>
      <ScrollView contentContainerStyle={styles.productContainer}>
        { boxProducts.map((product) => {
          return (
            <Card
              title={product.title}
              titleStyle={{ margin: 10 }}
              containerStyle={{ width: 150 }}
              image={product.image || placeHolderImg}
            >
              <Text>
                {product.detail}
              </Text>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 7,
    },
    productContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 24,
      margin: 18,
      color: '#B76D68',
    }
  }
);
export default UserBox;
