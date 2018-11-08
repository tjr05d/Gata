import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    const imgPath = "../../assets/black-cat.png"; 
    return (
      <Image
        source={require(imgPath)}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}