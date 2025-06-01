import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { buttonColor } from '../../styles/GlobalStyles';

const BottomSection = ({ totalPrice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your Customised
        Hair Kit Is Ready
      </Text>
      <Button mode="contained" buttonColor={buttonColor} textColor="#000" style={styles.button}>
        Buy Now {totalPrice}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f4d7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    width:"35%"
  },
  button: {
    borderRadius: 8,
    paddingHorizontal:0
  },
});

export default BottomSection;
