import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardDismissView = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View {...props}>
        { children }
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismissView;