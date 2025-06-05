import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HairTestCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Finding the root cause</Text>
      <Text style={styles.subtitle}>
        is a key to finding the right treatment for you.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Take The Hair Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F693D',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal:10
  },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  subtitle: { color: '#fff', marginTop: 4, marginBottom: 10 },
  button: {
    backgroundColor: '#D4ED6D',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#1F693D', fontWeight: 'bold' },
});
