import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const BottomSection = ({ totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your Customised
        Hair Kit Is Ready
      </Text>
      <Button mode="contained" buttonColor="#b8d700" textColor="#000" style={styles.button}>
        Buy Now {totalPrice}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2d0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  button: {
    borderRadius: 8,
  },
});

export default BottomSection;
