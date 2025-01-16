import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

const CircularButton = ({ children }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
    //   onPress={onPress}
      activeOpacity={0.7}
    >
        {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgb(250, 251, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    // Shadow cho iOS
    shadowColor: 'hsl(220, 80.90%, 77.50%)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow cho Android
    elevation: 5,
  },
});

export default CircularButton;