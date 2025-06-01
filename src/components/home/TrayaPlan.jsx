import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { rasDetox } from '../../assets';

const TrayaPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Traya Plan Includes</Text>

      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>1 month kit</Text>
          <Image source={rasDetox} style={styles.image} />
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Doctor prescription</Text>
          <Image source={rasDetox} style={styles.image} />
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Hair coach support</Text>
          <Image source={rasDetox} style={styles.image} />
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Customised diet plan</Text>
          <Image source={rasDetox} style={styles.image} />
        </View>
      </View>

      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>100% Safe</Text>
        <Text style={styles.tag}>Vegan Friendly</Text>
        <Text style={styles.tag}>Allergen Free</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10, 
    backgroundColor: '#fff',
    marginTop:15
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  gridText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  image: { width: 70, height: 70, resizeMode: 'contain' },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0d6cf',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  tag: { fontSize: 12, color: '#000' },

});

export default TrayaPlan;
